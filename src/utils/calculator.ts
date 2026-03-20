export interface CalculatorState {
  currentValue: string;
  previousValue: string;
  operator: string;
}

export const initialState: CalculatorState = {
  currentValue: "0",
  previousValue: "",
  operator: "",
};

export function handleNumber(
  digit: string,
  state: CalculatorState,
): CalculatorState {
  const { currentValue } = state;
  const newValue = currentValue === "0" ? digit : currentValue + digit;
  return { ...state, currentValue: newValue };
}

export function handleDecimal(state: CalculatorState): CalculatorState {
  if (state.currentValue.includes(".")) return state;
  return { ...state, currentValue: state.currentValue + "." };
}

export function handleOperator(
  operator: string,
  state: CalculatorState,
): CalculatorState {
  return {
    currentValue: "0",
    previousValue: state.currentValue,
    operator,
  };
}

export function handleEquals(state: CalculatorState): CalculatorState {
  const { currentValue, previousValue, operator } = state;
  if (!operator || !previousValue) return state;

  const a = parseFloat(previousValue);
  const b = parseFloat(currentValue);
  let result: number;

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "−":
      result = a - b;
      break;
    case "×":
      result = a * b;
      break;
    case "÷":
      result = b !== 0 ? a / b : 0;
      break;
    default:
      return state;
  }

  return {
    currentValue: String(result),
    previousValue: "",
    operator: "",
  };
}

export function handleToggleSign(state: CalculatorState): CalculatorState {
  const value = parseFloat(state.currentValue);
  return { ...state, currentValue: String(value * -1) };
}

export function handlePercentage(state: CalculatorState): CalculatorState {
  const value = parseFloat(state.currentValue);
  return { ...state, currentValue: String(value / 100) };
}

export function handleClear(): CalculatorState {
  return { currentValue: "0", previousValue: "", operator: "" };
}
