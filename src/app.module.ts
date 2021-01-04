import { appController } from './app.controller';
import { Module } from '@nestjs/common';
import { MovieController } from './movie/movie.controller';

@Module({
    imports:[],
    controllers:[appController, MovieController],
    providers:[]
})
export class AppModule{}