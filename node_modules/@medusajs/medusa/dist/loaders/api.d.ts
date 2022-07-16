import { Express } from 'express';
import { AwilixContainer } from "awilix";
import { ConfigModule } from "../types/global";
declare type Options = {
    app: Express;
    container: AwilixContainer;
    configModule: ConfigModule;
};
declare const _default: ({ app, container, configModule }: Options) => Promise<Express>;
export default _default;
