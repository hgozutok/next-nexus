import { MicroRequest } from "apollo-server-micro/dist/types";

export interface Context {
    [x: string]: any;
    req: MicroRequest;
}
