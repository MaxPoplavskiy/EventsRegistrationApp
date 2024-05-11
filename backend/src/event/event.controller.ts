import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateParticipantDto } from 'src/participant/dto/create-participant.dto';

@Controller('event')
export class EventController {
  constructor(
    private readonly eventService: EventService,
  ) {}

  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @Post(':id/register')
  @UsePipes(new ValidationPipe({ transform: true }))
  async register(@Param('id') id: string, @Body() participant: CreateParticipantDto) {
    return this.eventService.registerParticipant(+id, participant)
  }
}
