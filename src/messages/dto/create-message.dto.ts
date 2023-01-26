import { IsNotEmpty } from 'class-validator';

export class CreateMessageDto {
  @IsNotEmpty()
  readonly sender: string;

  @IsNotEmpty()
  readonly recipient: string;

  @IsNotEmpty()
  readonly theme: string;

  @IsNotEmpty()
  readonly text: string;

  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  unread: boolean;
}
