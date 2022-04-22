import { PrismaClient } from "@prisma/client";
import { MicroRequest } from "apollo-server-micro/dist/types";


export const prisma = new PrismaClient();

export interface Context {
    [x: string]: any;
    req: MicroRequest;
    prisma: PrismaClient;
}
