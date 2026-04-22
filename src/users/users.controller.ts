import { Controller, Delete, Get, Post } from '@nestjs/common';

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
  @Delete()
  public removeUser() {
    return 'Remove User hit';
  }
}
