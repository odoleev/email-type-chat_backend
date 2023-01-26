import { Users, UsersDocument } from "../schemas/users.schemas";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
export declare class UsersService {
    private usersModel;
    constructor(usersModel: Model<UsersDocument>);
    createOrGetUser(createUserDto: CreateUserDto): Promise<Users>;
    findAll(): Promise<Users[]>;
}
