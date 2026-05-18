import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { CreatePostDto } from './dtos/create.post.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { PatchPostDto } from './dtos/patch.post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get('/:userId')
  @ApiOperation({ summary: 'Get all posts by user ID' })
  @ApiResponse({ status: 200, description: 'Get all posts by user ID' })
  @ApiParam({
    name: 'userId',
    type: String,
    required: true,
    description: 'User ID',
    example: '1',
  })
  public getPostByUserId(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
  }
  @Post()
  @ApiOperation({ summary: 'Create a new post' })
  @ApiResponse({ status: 201, description: 'Post created successfully' })
  @ApiBody({ type: CreatePostDto })
  public createPost(@Body() createPostDto: CreatePostDto) {
    console.log(createPostDto);
    // return this.postsService.createPost(createPostDto);
  }

  @Patch()
  @ApiOperation({ summary: 'Update a post' })
  @ApiResponse({ status: 200, description: 'Post updated successfully' })
  @ApiBody({ type: PatchPostDto })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'Post ID',
    example: 1,
  })
  public patchPost(@Body() updatePostDto: PatchPostDto) {
    console.log(updatePostDto);
    // return this.postsService.patchPost(updatePostDto);
  }
}
