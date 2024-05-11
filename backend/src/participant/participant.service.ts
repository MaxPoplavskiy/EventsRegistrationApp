import { Injectable } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Participant } from './entities/participant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ParticipantService {
    constructor(@InjectRepository(Participant) private participantRepository: Repository<Participant>) {}

    create(participant: CreateParticipantDto) {
        const entity = this.participantRepository.create(participant);

        return this.participantRepository.save(entity);
    }
}
