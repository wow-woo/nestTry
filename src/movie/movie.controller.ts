import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Request } from 'express';

@Controller('movie')
export class MovieController {
    @Get()
    getAllMovies(){
        return 'show you all movies'
    }

    @Post()
    createMovie(
        @Body() body
    ){
        console.log(body)
        return `Created a movie : ${body.name}`
    }

    @Patch(':id')
    updateMovie(
        @Param('id') movieId:string
    ){
        return `Update movie with ${movieId}`
    }
}
