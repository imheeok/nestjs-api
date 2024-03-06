import {IsNumber, IsString} from "class-validator";

export class CreatePodcastDto{

    @IsString()
    readonly title: string;

    @IsNumber()
    readonly date: Date;

    @IsString({each:true})
    readonly category: string[];
}