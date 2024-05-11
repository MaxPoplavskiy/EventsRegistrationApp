import { IsNumberString } from "class-validator";

export class GetEventsPaginated {
    @IsNumberString()
    page: number;

    @IsNumberString()
    eventsPerPage: number;
}