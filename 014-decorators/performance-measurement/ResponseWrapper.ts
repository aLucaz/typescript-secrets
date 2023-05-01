import { ClassImporterInformer } from "./ClassImporterInformer";

interface WrappedResponse {
  data: Record<string, unknown>;
  metadata: {
    dateTime: number;
    serverIp: string;
  };
}

/**
 * note
 * this is a class decorator
 */
@ClassImporterInformer
export class ResponseWrapper {
  wrap(primitiveResponse: Record<string, unknown>): WrappedResponse {
    return {
      data: primitiveResponse,
      metadata: {
        dateTime: Date.now(),
        serverIp: "192.168.4.1",
      },
    };
  }
}
