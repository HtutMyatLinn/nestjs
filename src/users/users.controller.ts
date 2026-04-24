import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  // @Get()
  // public getUsers() {
  //   return 'Get Users hit';
  // }
  @Get(':id')
  public getUser(@Param('id', ParseIntPipe) id: number | undefined) {
    console.log(id, typeof id);
    return 'Get User hit';
  }
  @Get()
  public getFilterUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: any,
    @Query('offset', new DefaultValuePipe(8), ParseIntPipe) offset: any,
  ) {
    console.log(limit, offset);
    return 'Get Filter Users hit';
  }
  @Post()
  public updateUser(@Body() body: any) {
    console.log(body);
    return 'Update User hit';
  }
  @Delete()
  public removeUser() {
    return 'Remove User hit';
  }
}
