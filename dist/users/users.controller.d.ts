import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { Response } from "express";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createOrGetUser(createUserDto: CreateUserDto, res: Response): Promise<Response<any, Record<string, any>>>;
    getUsers(res: Response): Promise<Response<any, Record<string, any>>>;
}
