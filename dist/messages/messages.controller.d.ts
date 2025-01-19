import { CreateMessageDto } from './dtos/create-message.dtos';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    private messagesService;
    constructor(service: MessagesService);
    listMessages(): Promise<any>;
    createMessages(body: CreateMessageDto): Promise<any>;
    getMessage(id: string): Promise<any>;
}
