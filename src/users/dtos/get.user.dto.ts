import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

export class GetUserDto {
  @ApiProperty({
    description: 'User ID',
    example: 1,
  })
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  id: number;
}
