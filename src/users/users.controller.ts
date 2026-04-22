import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  public getUsers() {
    return 'Get Users hit';
  }
  @Post()
  public updateUser() {
    return 'Update User hit';
  }
}
