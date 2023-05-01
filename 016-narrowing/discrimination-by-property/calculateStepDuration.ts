/**
 * FACT 021
 * 
 * narrowing is beign applies by property here on line 12
 * the TS transpiler will react to this and will give me options 
 * based on the class that is being processed
 * 
 */

import { QuizStep } from "./QuizStep";
import { VideoStep } from "./VideoStep";

export function calculateStepDurationInMinutes(step: VideoStep | QuizStep) {
  if ("durationInMillis" in step) {
    return step.durationInMillis / 1000 / 60;
  }

  return step.questions.length * 3;
}
