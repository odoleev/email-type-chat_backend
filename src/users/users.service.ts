import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Users, UsersDocument} from "../schemas/users.schemas";
import {Model} from "mongoose";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UsersService{
    constructor(
        @InjectModel(Users.name) private usersModel: Model<UsersDocument>,
    ) {}

    async createOrGetUser(createUserDto: CreateUserDto): Promise<Users> {
        const existingUser = await this.usersModel.collection.findOne({
            username: createUserDto.username,
        });
        if(existingUser) {
            return existingUser as Users;
        }

        const createdUser = new this.usersModel(createUserDto)

        return createdUser.save();
    }

    async findAll(): Promise<Users[]> {
        return this.usersModel.find();
    }
}