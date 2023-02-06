import {IsString, IsNumber, Max, Min} from 'class-validator'
export class CreateReviewDto {
  @IsString()
  name: string;

  @IsString()
  title: string;

  @Max(5)
  @Min(1)
  @IsString()
  description: string;

  @IsNumber()
  rating: number;

  @IsString()
  productId: string;
}