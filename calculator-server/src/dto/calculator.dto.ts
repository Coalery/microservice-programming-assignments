import { IsInt } from 'class-validator';

export class CalculatorDto {
  @IsInt({ message: 'num1은 정수여야 합니다.' })
  num1: number;

  @IsInt({ message: 'num2는 정수여야 합니다.' })
  num2: number;
}
