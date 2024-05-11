import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateParticipantDto } from 'src/participant/dto/create-participant.dto';
import { GetEventsPaginated } from './dto/get-events-paginated.dto';

@Controller('event')
export class EventController {
  constructor(
    private readonly eventService: EventService,
  ) {}

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  findPaginated(@Query() params: GetEventsPaginated) {
    const { eventsPerPage, page } = params;
    
    return this.eventService.findPaginated(eventsPerPage, page);
  }

  @Post(':id/register')
  @UsePipes(new ValidationPipe({ transform: true }))
  async register(@Param('id') id: number, @Body() participant: CreateParticipantDto) {
    return this.eventService.registerParticipant(id, participant)
  }
}
