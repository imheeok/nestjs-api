import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';
import {PodcastService} from "./podcast.service";

@Controller('podcast')
export class PodcastController {
  constructor(private readonly podcastService: PodcastService) {}

  @Get()
    getAll() {
    return this.podcastService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') podcastId: string) {
    return this.podcastService.getOne(podcastId);
  }

  @Post()
  create(@Body() podcastData) {
    return this.podcastService.create(podcastData);
  }

  @Delete('/:id')
  remove(@Param('id') podcastId: string) {
    return this.podcastService.deleteOne(podcastId);
  }

  @Patch('/:id')
  patch(@Param('id') podcastId: string, @Body() updateData) {
    return this.podcastService.update(podcastId,updateData);
  }
}
