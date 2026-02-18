import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Contact {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    subject: string;

    @Column('text')
    message: string;

    @CreateDateColumn()
    createdAt: Date;

    @Column({ default: false })
    read: boolean;
}
