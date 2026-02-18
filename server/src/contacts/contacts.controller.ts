import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { ContactsService, CreateContactDto } from './contacts.service';
import { Contact } from './entities/contact.entity';

@Controller('contacts')
export class ContactsController {
    constructor(private readonly contactsService: ContactsService) {}

    @Post()
    async create(@Body() createContactDto: CreateContactDto): Promise<Contact> {
        return await this.contactsService.create(createContactDto);
    }

    @Get()
    async findAll(): Promise<Contact[]> {
        return await this.contactsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Contact> {
        return await this.contactsService.findOne(id);
    }

    @Patch(':id/read')
    async markAsRead(@Param('id') id: string): Promise<Contact> {
        return await this.contactsService.markAsRead(id);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return await this.contactsService.remove(id);
    }
}
