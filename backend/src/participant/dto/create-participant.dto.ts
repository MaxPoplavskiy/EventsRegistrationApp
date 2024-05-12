import { IsDateString, IsEmail, IsEnum, IsNotEmpty } from "class-validator";
import { ParticipantSource } from "../entities/participant.entity";

export class CreateParticipantDto {
    @IsNotEmpty()
    fullName: string;

    @IsEmail()
    email: string;

    @IsDateString()
    dateOfBirth: Date;

    @IsEnum(ParticipantSource)
    source: ParticipantSource;
}