import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(public readonly userService: UserService) {}
}
