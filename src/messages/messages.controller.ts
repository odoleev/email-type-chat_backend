import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param, Patch,
  Post,
  Res,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { GetSentAndReceivedMessagesDto } from './dto/get-sent-and-received-messages.dto';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Post('create')
  @HttpCode(HttpStatus.OK)
  async createMessage(@Body() createMessageDto: CreateMessageDto) {
    await this.messagesService.createMessage(createMessageDto);

    return 'Message is sent';
  }

  @Post('sent')
  @HttpCode(HttpStatus.OK)
  async getSentMessages(
    @Body() sentAndReceivedDto: GetSentAndReceivedMessagesDto,
  ) {
    const messages = await this.messagesService.getAllMessages();
    return messages.filter((message) => {
      return message.sender === sentAndReceivedDto.username;
    });
  }

  @Post('received')
  @HttpCode(HttpStatus.OK)
  async getReceivedMessages(
    @Body() sentAndReceivedDto: GetSentAndReceivedMessagesDto,
  ) {
    const messages = await this.messagesService.getAllMessages();
    return messages.filter((message) => {
      return message.recipient === sentAndReceivedDto.username;
    });
  }

  @Patch('/:id')
  @HttpCode(HttpStatus.OK)
  async readMessage(@Param('id') id: string) {
    return await this.messagesService.setRead(id);
  }
}
