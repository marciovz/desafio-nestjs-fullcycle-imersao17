import { 
  IsNumber, IsNotEmpty, IsPositive, IsString, MaxLength, isNumber } from "class-validator";

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  asset_id: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  price: number;
}
