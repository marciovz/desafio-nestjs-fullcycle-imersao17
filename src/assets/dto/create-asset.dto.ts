import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateAssetDto {

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  id: string;
  
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  symbol: string;
}
