import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './entities/event.entity';
import { CreateParticipantDto } from 'src/participant/dto/create-participant.dto';
import { ParticipantService } from 'src/participant/participant.service';
import { EventsSort } from './dto/get-events-paginated.dto';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event) private eventRepository: Repository<Event>,
    private participantService: ParticipantService
  ) {}

  findPaginated(valuesPerPage: number, currentPage: number, sort: EventsSort) {
    const offset = valuesPerPage * currentPage;

    let query = this.eventRepository.createQueryBuilder('events')
    .offset(offset)
    .limit(valuesPerPage);
    
    if(sort === EventsSort.Title) {
      query = query.orderBy(EventsSort.Title, 'ASC');
    } 
    else if(sort === EventsSort.EventDate) {
      query = query.orderBy(`"${EventsSort.EventDate}"`, 'ASC');
    }
    else if(sort === EventsSort.Organizer) {
      query = query.orderBy(EventsSort.Organizer, 'ASC');
    }

    return query.getMany();
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
