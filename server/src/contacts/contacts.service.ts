import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './entities/contact.entity';

export class CreateContactDto {
    name: string;
    email: string;
    subject: string;
    message: string;
}

@Injectable()
export class ContactsService {
    constructor(
        @InjectRepository(Contact)
        private contactsRepository: Repository<Contact>,
    ) {}

    async create(createContactDto: CreateContactDto): Promise<Contact> {
        const contact = this.contactsRepository.create(createContactDto);
        return await this.contactsRepository.save(contact);
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
}
