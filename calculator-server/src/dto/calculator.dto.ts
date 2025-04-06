import { IsInt, Max, Min } from 'class-validator';

export class CalculatorDto {
  @IsInt({ message: 'num1은 정수여야 합니다.' })
  @Min(-100, { message: 'num1은 -100 이상이어야 합니다.' })
  @Max(100, { message: 'num1은 100 이하여야 합니다.' })
  num1: number;

  @IsInt({ message: 'num2는 정수여야 합니다.' })
  @Min(-100, { message: 'num2는 -100 이상이어야 합니다.' })
  @Max(100, { message: 'num2은 100 이하여야 합니다.' })
  num2: number;
}
