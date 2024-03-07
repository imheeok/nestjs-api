import { Module } from '@nestjs/common';
import { PodcastModule } from './podcast/podcast.module';
import { AppController } from './app.controller';

@Module({
  imports: [PodcastModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
