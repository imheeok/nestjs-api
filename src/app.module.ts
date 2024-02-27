import { Module } from '@nestjs/common';
import { PodcastController } from './podcast/podcast.controller';
import { PodcastService } from './podcast/podcast.service';

@Module({
  imports: [],
  controllers: [PodcastController],
  providers: [PodcastService],
})
export class AppModule {}
