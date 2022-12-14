import { ApiProperty } from '@nestjs/swagger';
import { Roles } from '@prisma/client';
import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsInt,
  MaxLength,
  IsOptional,
  IsArray,
} from 'class-validator';
export class CreateUserDto {
  @ApiProperty({ minimum: 5, maximum: 20 })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
  fullname: string;

  @ApiProperty({ required: false })
  @IsInt()
  @IsOptional()
  age?: number | null;

  @ApiProperty({ minimum: 5, maximum: 20 })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
  username: string;

  @ApiProperty({ minimum: 6 })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(255)
  password: string;

  @ApiProperty({
    enum: Roles,
    isArray: true,
    required: false,
    default: ['USER'],
  })
  @IsOptional()
  @IsArray()
  roles?: Roles;
}
