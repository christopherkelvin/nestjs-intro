import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-postdto';
@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(
    /*
     *  Injecting Posts Service
     */
    // eslint-disable-next-line no-unused-vars
    private readonly postsService: PostsService,
  ) {}

  /*
   * GET localhost:3000/posts/:userId
   */
  @Get('/:userId?')
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
  }

  @Post()
  public createUsers(@Body() createPostDto: CreatePostDto) {
    console.log(createPostDto instanceof CreatePostDto);
    return 'You sent a post request to users endpoint';
  }
}
