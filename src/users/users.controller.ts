import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { GetUserDto } from './dtos/get.user.dto';
import { PutUserDto } from './dtos/put.user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from './dtos/create.user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Get all users' })
  @ApiQuery({
    name: 'limit',
    type: Number,
    required: false,
    description: 'Limit of users',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
    description: 'Page of users',
    example: 8,
  })
  public getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(8), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll(limit, page);
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID 123' })
  @ApiResponse({ status: 200, description: 'Get user by ID Response' })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'User ID',
    example: 1,
  })
  public getUser(@Param() getUserDto: GetUserDto) {
    console.log(getUserDto.id);
    return this.usersService.fn1(getUserDto.id);
  }

  @Post()
  public createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Put()
  public updateUser(@Body() putUserDto: PutUserDto) {
    console.log(putUserDto);
    return this.usersService.putUser(putUserDto);
  }
  @Delete()
  public removeUser() {
    return 'Remove User hit';
  }
}
