import { NextFunction, Request, Response } from "express";
import { ClassConstructor } from "../../types/global";
import { ValidatorOptions } from "class-validator";
export declare function transformBody<T>(plainToClass: ClassConstructor<T>, config?: ValidatorOptions): (req: Request, res: Response, next: NextFunction) => Promise<void>;
