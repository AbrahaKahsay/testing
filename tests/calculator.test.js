const calculator = require('../jsmodules/calculator');
describe('calculator', () => {
    describe('add', () => {
      test('2 + 3 = 5', () => {  
        expect(calculator.add(2, 3)).toBe(5);
      });
  
      test('10 + 40 = 50', () => {  
        expect(calculator.add(10, 40)).toBe(50);
      });
  
      test('1 + 8 = 9', () => {
        expect(calculator.add(1, 8)).toBe(9);
      });
    });

    describe('subtract', () => {
        test('4 - 1 = 3', () => {  
          expect(calculator.subtract(4, 1)).toBe(3);
        });
    
        test('8 - 0 = 8', () => {  
          expect(calculator.subtract(8, 0)).toBe(8);
        });
    
        test('100 - 8 = 92', () => {
          expect(calculator.subtract(100, 8)).toBe(92);
        });
      });

      describe('multiply', () => {
        test('4 * 1 = 4', () => {  
          expect(calculator.multiply(4, 1)).toBe(4);
        });
    
        test('2 * 4 = 8', () => {  
          expect(calculator.multiply(2, 4)).toBe(8);
        });
    
        test('3 * 4 = 12', () => {
          expect(calculator.multiply(3, 4)).toBe(12);
        });
      });

      describe('divide', () => {
        test('4 / 1 = 4', () => {  
          expect(calculator.divide(4, 1)).toBe(4);
        });
        test('4 / 2 = 2', () => {  
            expect(calculator.divide(4, 2)).toBe(2);
          });
          test('10 / 2 = 5', () => {  
            expect(calculator.divide(10, 2)).toBe(5);
          });     
      });
});