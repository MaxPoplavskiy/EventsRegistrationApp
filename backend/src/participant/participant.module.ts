import { Module } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Participant } from './entities/participant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Participant])],
  providers: [ParticipantService],
  exports: [ParticipantService],
})
export class ParticipantModule {}
