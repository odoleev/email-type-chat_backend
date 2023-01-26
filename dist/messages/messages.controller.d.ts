import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { GetSentAndReceivedMessagesDto } from './dto/get-sent-and-received-messages.dto';
export declare class MessagesController {
    private messagesService;
    constructor(messagesService: MessagesService);
    createMessage(createMessageDto: CreateMessageDto): Promise<string>;
    getSentMessages(sentAndReceivedDto: GetSentAndReceivedMessagesDto): Promise<import("../schemas/messages.schemas").Messages[]>;
    getReceivedMessages(sentAndReceivedDto: GetSentAndReceivedMessagesDto): Promise<import("../schemas/messages.schemas").Messages[]>;
    readMessage(id: string): Promise<void>;
}
