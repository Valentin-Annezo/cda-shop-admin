import { JwtPayload } from "jsonwebtoken";
import { BaseService } from "medusa-interfaces";
import { EntityManager } from "typeorm";
import { EventBusService, UserService } from ".";
import { User } from "..";
import { UserRoles } from "../models/user";
import { InviteRepository } from "../repositories/invite";
import { UserRepository } from "../repositories/user";
import { ListInvite } from "../types/invites";
import { ConfigModule } from "../types/global";
declare type InviteServiceProps = {
    manager: EntityManager;
    userService: UserService;
    userRepository: UserRepository;
    inviteRepository: InviteRepository;
    eventBusService: EventBusService;
};
declare class InviteService extends BaseService {
    static Events: {
        CREATED: string;
    };
    private manager_;
    private userService_;
    private userRepo_;
    private inviteRepository_;
    private eventBus_;
    protected readonly configModule_: ConfigModule;
    constructor({ manager, userService, userRepository, inviteRepository, eventBusService, }: InviteServiceProps, configModule: ConfigModule);
    withTransaction(manager: any): InviteService;
    generateToken(data: any): string;
    list(selector: any, config?: {}): Promise<ListInvite[]>;
    /**
     * Updates an account_user.
     * @param {string} user - user emails
     * @param {string} role - role to assign to the user
     * @param {number} validDuration - role to assign to the user
     * @return {Promise} the result of create
     */
    create(user: string, role: UserRoles, validDuration?: number): Promise<void>;
    /**
     * Deletes an invite from a given user id.
     * @param {string} inviteId - the id of the invite to delete. Must be
     *   castable as an ObjectId
     * @return {Promise} the result of the delete operation.
     */
    delete(inviteId: any): Promise<void>;
    accept(token: any, user_: any): Promise<User>;
    verifyToken(token: any): JwtPayload | string;
    resend(id: any): Promise<void>;
}
export default InviteService;
