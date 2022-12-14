import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger/dist';
import { IsOptional, IsString, Length } from 'class-validator';
export class CreateClientDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  denomination?: string;

  @ApiProperty()
  @Length(10, 10)
  phoneNumber: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Length(10, 10)
  phoneNumber2?: string;
}
