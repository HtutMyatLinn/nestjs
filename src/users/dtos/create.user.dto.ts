import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'The first name of the user', example: 'John' })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  firstName!: string;

  @ApiPropertyOptional({
    description: 'The last name of the user',
    example: 'Doe',
  })
  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(100)
  lastName?: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'john.doe@example.com',
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100)
  email!: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'Password123!',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(100)
  @Matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,32}$/, {
    message: 'password too weak',
  })
  password!: string;
}
