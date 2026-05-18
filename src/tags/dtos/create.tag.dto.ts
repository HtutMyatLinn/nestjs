import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateTagDto {
  @ApiProperty({ description: 'The label of the tag', example: 'Tag 1' })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(256)
  label!: string;

  @ApiPropertyOptional({
    description: 'The description of the tag',
    example: 'Description 1',
  })
  @IsString()
  @IsOptional()
  description?: string;
}
