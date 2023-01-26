import mongoose from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type UsersDocument = Users & Document

@Schema()
export class Users{
    @Prop({required: true})
    username: string;

    _id: mongoose.Types.ObjectId | string;
}

export const UsersSchema = SchemaFactory.createForClass(Users)