import Participant from "./participant.type";

type Event = {
    id: number;
    title: string;

    description: string;
    eventDate: Date;
    organizer: string;
    participants?: Participant[];
}

export default Event;