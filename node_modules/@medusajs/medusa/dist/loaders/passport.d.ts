import { Express } from 'express';
import { ConfigModule, MedusaContainer } from "../types/global";
declare const _default: ({ app, container, configModule }: {
    app: Express;
    container: MedusaContainer;
    configModule: ConfigModule;
}) => Promise<void>;
export default _default;
