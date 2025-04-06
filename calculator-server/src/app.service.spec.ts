import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorService } from './app.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculatorService],
    }).compile();

    service = module.get<CalculatorService>(CalculatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('add', () => {
    it('should add two numbers correctly', () => {
      expect(service.add(2, 3)).toBe(5);
      expect(service.add(-5, 5)).toBe(0);
      expect(service.add(100, -100)).toBe(0);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers correctly', () => {
      expect(service.subtract(5, 3)).toBe(2);
      expect(service.subtract(5, -5)).toBe(10);
      expect(service.subtract(-5, -5)).toBe(0);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers correctly', () => {
      expect(service.multiply(2, 3)).toBe(6);
      expect(service.multiply(-5, 5)).toBe(-25);
      expect(service.multiply(-5, -5)).toBe(25);
      expect(service.multiply(0, 5)).toBe(0);
    });
  });

  describe('divide', () => {
    it('should divide two numbers correctly', () => {
      expect(service.divide(6, 3)).toBe(2);
      expect(service.divide(-6, 3)).toBe(-2);
      expect(service.divide(-6, -3)).toBe(2);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => service.divide(5, 0)).toThrow(
        'Division by zero is not allowed',
      );
    });
  });
});
