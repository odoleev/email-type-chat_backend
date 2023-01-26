import {Body, Controller, Get, HttpStatus, Post, Res} from "@nestjs/common";
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {Response} from "express";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    async createOrGetUser(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
        const user = await this.usersService.createOrGetUser(createUserDto);

        res.statusCode = HttpStatus.OK;
        return res.send(user);
    }

    @Get()
    async getUsers(@Res() res: Response) {
        const users = await this.usersService.findAll();
        res.statusCode = HttpStatus.OK;
        return res.send(users);
    }
}