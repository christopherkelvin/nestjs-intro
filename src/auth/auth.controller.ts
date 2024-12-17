import { Controller } from '@nestjs/common';
import { AuthService } from './provider/auth.service';

@Controller('auth')
export class AuthController {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly authService: AuthService) {}
}
