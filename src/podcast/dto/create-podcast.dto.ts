import {IsDateString, IsOptional, IsString} from "class-validator";

export class CreatePodcastDto{

    @IsString()
    readonly title: string;

    @IsDateString()
    readonly date: string;

    @IsOptional()
    @IsString({each:true})
    readonly category: string[];
}