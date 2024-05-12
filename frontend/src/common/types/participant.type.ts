import Event from "./event.type";

export enum ParticipantSource {
    SocialMedia = 'Social media',
    Friends = 'Friends',
    FoundMyself = 'Found myself',
}

type Participant = {
    id: number;

    fullName: string;

    email: string;

    dateOfBirth: string;

    event: Event;

    source: ParticipantSource;
}

export default Participant;