import {IsNotEmpty} from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    readonly username: string;
}