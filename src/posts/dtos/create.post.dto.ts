import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { PostStatus } from '../enums/postStatus.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ description: 'The title of the post', example: 'Post 1' })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  title!: string;
  @ApiProperty({ description: 'The slug of the post', example: 'post-1' })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'slug must be lowercase and hyphenated words',
  })
  @MaxLength(100)
  slug!: string;
  @ApiProperty({ description: 'The status of the post', enum: PostStatus })
  @IsEnum(PostStatus)
  @IsNotEmpty()
  status!: PostStatus;

  @ApiProperty({ description: 'The content of the post', example: 'Content 1' })
  @IsString()
  @IsNotEmpty()
  content!: string;

  // eslint-disable-next-line prettier/prettier
  @ApiProperty({ description: 'The featured image URL of the post', example: 'https://example.com/image.jpg' })
  @IsString()
  @IsOptional()
  @IsUrl({}, { message: 'featuredImgUrl must be a valid URL' })
  featuredImgUrl?: string;

  // eslint-disable-next-line prettier/prettier
  @ApiProperty({ description: 'The published on date of the post', example: '2021-01-01T00:00:00Z' })
  @IsOptional()
  @IsISO8601({}, { message: 'publishedOn must be a valid ISO 8601 date' })
  publishedOn?: string;

  // eslint-disable-next-line prettier/prettier
  @ApiProperty({ description: 'The tags of the post', example: ['tag1', 'tag2'] })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  @MinLength(2, { each: true, message: 'tags must be at least 2 characters' })
  tags?: string[];
}
