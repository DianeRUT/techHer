interface ClassStructure{
    setName: (name: string) => void;
    getName: () => string;
}

class ExampleOne implements ClassStructure{
    name: string = '';
    setName(name: string): void {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
}

interface CalculatorStructure {
    add:(a: number, b: number) =>number;
    subtract:(a: number, b: number) => number;
  }

  class Calculator implements CalculatorStructure {
    add = (a: number, b: number): number => {
      return a + b;
    }
    
  
    subtract = (a: number, b: number): number => {
      return a - b;
    }
  }

  const calc = new Calculator();

console.log("Addition:", calc.add(10, 5));     
console.log("Subtraction:", calc.subtract(10, 5)); 