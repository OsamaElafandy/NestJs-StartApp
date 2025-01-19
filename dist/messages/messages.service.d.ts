import { MessagesRepository } from "./messages.repository";
export declare class MessagesService {
    private messagesRepository;
    constructor(repository: MessagesRepository);
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
    create(content: string): Promise<any>;
}
