import { IsOptional, IsString, Length } from 'class-validator';
export class CreateClientDto {
  @IsOptional()
  @IsString()
  denomination?: string;
  @Length(10, 10)
  phoneNumber: string;
  @IsOptional()
  @Length(10, 10)
  phoneNumber2?: string;
}
