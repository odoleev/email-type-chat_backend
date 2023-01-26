import { IsNotEmpty } from 'class-validator';

export class GetSentAndReceivedMessagesDto {
  @IsNotEmpty()
  readonly username: string;
}
