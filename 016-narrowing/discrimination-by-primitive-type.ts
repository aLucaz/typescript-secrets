/**
 * FACT 020 
 * 
 * narrowing is the capacity to manage different behaviors depending on the variable type
 * in this case narrowing is beign applied on line 14
 * 
 * ts must support this because it need to be compatible with existing javascript code
 * 
 * @param {(string|number)} rawStepDuration - The duration in minutes as text expression ('5 minutes') or the duration in millis
 */
export function calculateDurationInMinutesPrimitives(
  rawStepDuration: string | number 
): number {
  if (typeof rawStepDuration === "string") {
    const splitAmountAndUnit = rawStepDuration.match(
      /(?<amount>\d*\.?\d+)\s*(?<unit>[a-zA-Z]+)$/
    );

    if (splitAmountAndUnit) {
      return parseFloat(splitAmountAndUnit.groups?.amount || "0");
    }

    return 0;
  }

  return rawStepDuration / 1000 / 60;
}
