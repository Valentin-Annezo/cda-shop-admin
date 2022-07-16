import { ConfigModule, MedusaContainer } from "../types/global";
import { Logger } from "../types/global";
declare type Options = {
    container: MedusaContainer;
    configModule: ConfigModule;
    logger: Logger;
};
declare function redisLoader({ container, configModule, logger, }: Options): Promise<void>;
export default redisLoader;
