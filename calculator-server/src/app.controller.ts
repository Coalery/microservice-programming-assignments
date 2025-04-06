import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CalculatorService } from './app.service';
import { CalculatorDto } from './dto/calculator.dto';

@Controller()
export class AppController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Post('add')
  @UsePipes(new ValidationPipe())
  add(@Body() calculatorDto: CalculatorDto): { result: number } {
    try {
      const result = this.calculatorService.add(
        calculatorDto.num1,
        calculatorDto.num2,
      );
      return { result };
    } catch (error) {
      this.handleError(error);
    }
  }

  @Post('subtract')
  @UsePipes(new ValidationPipe())
  subtract(@Body() calculatorDto: CalculatorDto): { result: number } {
    try {
      const result = this.calculatorService.subtract(
        calculatorDto.num1,
        calculatorDto.num2,
      );
      return { result };
    } catch (error) {
      this.handleError(error);
    }
  }

  @Post('multiply')
  @UsePipes(new ValidationPipe())
  multiply(@Body() calculatorDto: CalculatorDto): { result: number } {
    try {
      const result = this.calculatorService.multiply(
        calculatorDto.num1,
        calculatorDto.num2,
      );
      return { result };
    } catch (error) {
      this.handleError(error);
    }
  }

  @Post('divide')
  @UsePipes(new ValidationPipe())
  divide(@Body() calculatorDto: CalculatorDto): { result: number } {
    try {
      const result = this.calculatorService.divide(
        calculatorDto.num1,
        calculatorDto.num2,
      );
      return { result };
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: any): never {
    if (error instanceof HttpException) {
      throw error;
    } else {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
