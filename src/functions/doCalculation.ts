export default function calculationResult(
  firstNumber: number,
  operationForCalculation: string,
  secondNumber: number
): number {
  let calculationResult = 0

  switch (operationForCalculation) {
    case 'addition': {
      calculationResult = firstNumber + secondNumber
      break
    }
    case 'subtraction': {
      calculationResult = firstNumber - secondNumber
      break
    }
    case 'multiplication': {
      calculationResult = firstNumber * secondNumber
      break
    }
    case 'division': {
      calculationResult = firstNumber / secondNumber
      break
    }
  }

  return calculationResult
}
