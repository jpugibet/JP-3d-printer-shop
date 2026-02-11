import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column('text')
    description: string;

    @Column({ nullable: true })
    nameEs?: string;

    @Column('text', { nullable: true })
    descriptionEs?: string;

    @Column('decimal')
    price: number;

    @Column()
    technology: string;

    @Column('simple-array')
    images: string[];

    @Column()
    stock: number;
}
