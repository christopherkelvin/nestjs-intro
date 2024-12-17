import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/user.service';
@Injectable()
export class PostsService {
  constructor(private readonly userService: UserService) {}
  public findAll(userId: string) {
    const user = this.userService.findOneById(userId);
    return [
      { user: user, title: 'Title 1', content: 'Content 1' },
      { user: user, title: 'Title 2', content: 'Content 2' },
    ];
  }
}
