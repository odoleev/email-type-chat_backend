import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MessagesDocument = Messages & Document;

@Schema()
export class Messages {
  @Prop({ required: true })
  sender: string;

  @Prop({ required: true })
  recipient: string;

  @Prop({ required: true, default: '(no theme)' })
  theme: string;

  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true, default: true })
  unread: boolean;
}

export const MessagesSchema = SchemaFactory.createForClass(Messages);
