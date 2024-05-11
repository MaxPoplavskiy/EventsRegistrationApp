import { Participant } from "src/participant/entities/participant.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    eventDate: Date;

    @Column()
    organizer: string;

    @OneToMany(() => Participant, (participant) => participant.event)
    participants: Participant[]
}
