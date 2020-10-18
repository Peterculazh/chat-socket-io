import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        length: 100
    })
    name!: string;

    @Column('text')
    description!: string;

    @Column()
    filename!: string;

    @Column('float', {
        default: 0
    })
    views!: number;

    @Column()
    isPublished!: boolean;
}