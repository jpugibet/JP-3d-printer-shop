import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { Contact } from './entities/contact.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Contact]),
        HttpModule,
    ],
    controllers: [ContactsController],
    providers: [ContactsService],
    exports: [ContactsService],
})
export class ContactsModule {}
