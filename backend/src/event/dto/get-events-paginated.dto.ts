import { IsEnum, IsNumberString } from "class-validator";

export enum EventsSort {
    Title = 'title',
    EventDate = 'eventDate',
    Organizer = 'organizer'
}

export class GetEventsPaginated {
    @IsNumberString()
    page: number;

    @IsNumberString()
    eventsPerPage: number;

    @IsEnum(EventsSort)
    sort: EventsSort
}