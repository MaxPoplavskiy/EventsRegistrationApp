import { IsDateString, IsEmail, IsNotEmpty } from "class-validator";

export class CreateParticipantDto {
    @IsNotEmpty()
    fullName: string;

    @IsEmail()
    email: string;

    @IsDateString()
    dateOfBirth: Date;
}