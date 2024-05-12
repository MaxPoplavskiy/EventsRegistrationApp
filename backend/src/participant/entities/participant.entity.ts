import { Event } from "src/event/entities/event.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum ParticipantSource {
    SocialMedia = 'Social media',
    Friends = 'Friends',
    FoundMyself = 'Found myself',
};

@Entity()
export class Participant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    email: string;

    @Column()
    dateOfBirth: Date;

    @ManyToOne(() => Event, (event) => event.participants)
    event: Event;

    @Column()
    source: ParticipantSource;
}
