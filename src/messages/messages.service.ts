import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Messages, MessagesDocument } from '../schemas/messages.schemas';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Messages.name) private messagesModel: Model<MessagesDocument>,
  ) {}

  async getAllMessages(): Promise<Messages[]> {
    return this.messagesModel.find();
  }

  async createMessage(createMessageDto: CreateMessageDto): Promise<Messages> {
    let newMessage = new this.messagesModel(createMessageDto);
    return newMessage.save();
  }

  async setRead(id: string): Promise<void> {
    await this.messagesModel.updateOne(
      { _id: id },
      {
        $set: {
          unread: false,
        },
      },
    );
  }
}
