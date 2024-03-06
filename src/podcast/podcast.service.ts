import {Injectable, NotFoundException} from '@nestjs/common';
import {Podcast} from "./entity/podcast.entity";
import {CreatePodcastDto} from "./dto/create-podcast.dto";
import {UpdatePodcastDto} from "./dto/update-podcast.dto";

@Injectable()
export class PodcastService {
    private podcasts : Podcast[] = [];

    getAll(): Podcast[] {
        return this.podcasts;
    }

    getOne(id: number): Podcast {
        const podcast = this.podcasts.find(podcasts => podcasts.id === id);
        if(!podcast){
            throw new NotFoundException(`Podcast with ID ${id} not found.`);
        }
        return podcast;
    }

    //fake delete
    deleteOne(id: number){
        this.getOne(id);
        this.podcasts = this.podcasts.filter(podcast => podcast.id !== +id);
    }

    create(podcastData: CreatePodcastDto){
        this.podcasts.push({
            id : this.podcasts.length + 1,
            ...podcastData,
        });
    }
    update(id: number, updateData: UpdatePodcastDto){
        const podcast = this.getOne(id);
        this.deleteOne(id);
        this.podcasts.push({...podcast, ...updateData});
    }
}
