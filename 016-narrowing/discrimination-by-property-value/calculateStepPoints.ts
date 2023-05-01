/**
 * FACT 021
 * 
 * narrowing is beign applied by property value here on line 14
 * the TS transpiler makes an static analysis of our classes
 * 
 */

import { QuizStep } from "./QuizStep";
import { VideoStep } from "./VideoStep";

export function calculateStepPoints(step: VideoStep | QuizStep) {
  if (step.type === "video") {
    return step.durationInMillis / 1000;
  }

  return step.questions.length * 50;
}
