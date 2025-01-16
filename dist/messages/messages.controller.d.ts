import { CreateMessageDto } from './dtos/create-message.dtos';
export declare class MessagesController {
    listMessages(): string;
    createMessages(body: CreateMessageDto): string;
    getMessage(id: number): string;
}
