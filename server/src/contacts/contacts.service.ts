import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './entities/contact.entity';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

export class CreateContactDto {
    name: string;
    email: string;
    subject: string;
    message: string;
}

@Injectable()
export class ContactsService {
    private readonly logger = new Logger(ContactsService.name);

    constructor(
        @InjectRepository(Contact)
        private contactsRepository: Repository<Contact>,
        private readonly httpService: HttpService,
    ) {}

    async create(createContactDto: CreateContactDto): Promise<Contact> {
        const contact = this.contactsRepository.create(createContactDto);
        const saved = await this.contactsRepository.save(contact);

        // send data to Relay workflow if configured
        this.notifyRelay(saved).catch(err => {
            this.logger.error('Failed to notify Relay workflow', err);
        });

        return saved;
    }

    async findAll(): Promise<Contact[]> {
        return await this.contactsRepository.find({
            order: {
                createdAt: 'DESC',
            },
        });
    }

    async findOne(id: string): Promise<Contact> {
        return await this.contactsRepository.findOne({ where: { id } });
    }

    async markAsRead(id: string): Promise<Contact> {
        const contact = await this.findOne(id);
        if (contact) {
            contact.read = true;
            return await this.contactsRepository.save(contact);
        }
        return null;
    }

    async remove(id: string): Promise<void> {
        await this.contactsRepository.delete(id);
    }

    private async notifyRelay(contact: Contact): Promise<void> {
        const url = process.env.RELAY_CONTACT_WEBHOOK_URL;
        if (!url) {
            return;
        }

        try {
            await firstValueFrom(
                this.httpService.post(url, {
                    id: contact.id,
                    name: contact.name,
                    email: contact.email,
                    subject: contact.subject,
                    message: contact.message,
                    createdAt: contact.createdAt
                })
            );
        } catch (error) {
            this.logger.error('Error sending contact to Relay', error);
        }
    }
}
