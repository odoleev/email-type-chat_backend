import mongoose from "mongoose";
export type UsersDocument = Users & Document;
export declare class Users {
    username: string;
    _id: mongoose.Types.ObjectId | string;
}
export declare const UsersSchema: mongoose.Schema<Users, mongoose.Model<Users, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Users>;
