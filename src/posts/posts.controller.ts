import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './providers/posts.service';

@Controller('posts')
export class PostsController {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly postService: PostsService) {}
  @Get('/:userId?')
  public findAll(@Param() userId: string) {
    return this.postService.findAll(userId);
  }
}
