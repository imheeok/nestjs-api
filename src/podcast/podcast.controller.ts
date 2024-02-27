import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';

@Controller('podcast')
export class PodcastController {
  @Get()
    getAll() {
    return 'This will return all podcasts';
  }

  @Get("search")
  search(@Query("year") searchingYear: string){
    return 'We are searching for a podcast posted after : '+searchingYear;
  }

  @Get('/:id')
    getOne(@Param('id') podcastId: string) {
    return 'This will return one podcasts with the id : '+ podcastId;
  }

  @Post()
  create(@Body() podcastData) {
    return podcastData;
  }

  @Delete('/:id')
  remove(@Param('id') podcastId: string) {
    return 'This will delete a podcast with the id : '+ podcastId;
  }

  @Patch('/:id')
  patch(@Param('id') podcastId: string, @Body() updateData) {
    return {
      updatedPodcast: podcastId,
      ...updateData
    };
  }
}
