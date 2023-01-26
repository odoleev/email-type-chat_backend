export declare class CreateMessageDto {
    readonly sender: string;
    readonly recipient: string;
    readonly theme: string;
    readonly text: string;
    date: Date;
    unread: boolean;
}
