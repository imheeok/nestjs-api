import { Module } from '@nestjs/common';
import { PodcastController } from './podcast/podcast.controller';

@Module({
  imports: [],
  controllers: [PodcastController],
  providers: [],
})
export class AppModule {}
