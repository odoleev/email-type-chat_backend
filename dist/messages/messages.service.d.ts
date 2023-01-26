import { Model } from 'mongoose';
import { Messages, MessagesDocument } from '../schemas/messages.schemas';
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessagesService {
    private messagesModel;
    constructor(messagesModel: Model<MessagesDocument>);
    getAllMessages(): Promise<Messages[]>;
    createMessage(createMessageDto: CreateMessageDto): Promise<Messages>;
    setRead(id: string): Promise<void>;
}
