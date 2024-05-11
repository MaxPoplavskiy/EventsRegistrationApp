import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './entities/event.entity';
import { CreateParticipantDto } from 'src/participant/dto/create-participant.dto';
import { ParticipantService } from 'src/participant/participant.service';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event) private eventRepository: Repository<Event>,
    private participantService: ParticipantService
  ) {}

  findPaginated(valuesPerPage: number, currentPage: number) {
    const offset = valuesPerPage * currentPage;

    return this.eventRepository.createQueryBuilder('events')
    .offset(offset)
    .limit(valuesPerPage)
    .getMany();
  }

  find(id: number) {
    return this.eventRepository.findOne({
      where: {
        id
      },
      relations: {
        participants: true
      },
    });
  }

  async registerParticipant(id: number, participant: CreateParticipantDto) {
    const participantEntity = await this.participantService.create(participant);

    const event = await this.find(+id);

    event.participants.push(participantEntity);

    return this.eventRepository.save(event);
  }
}
