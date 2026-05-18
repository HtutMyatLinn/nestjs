import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePostDto } from './create.post.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class PatchPostDto extends PartialType(CreatePostDto) {
  @ApiProperty({ description: 'The ID of the post', example: 1 })
  @IsNotEmpty()
  @IsInt()
  id: number;
}
