import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";


@Injectable()
export class MessagesService {
    private messagesRepository: MessagesRepository;

    constructor(repository: MessagesRepository) {
        this.messagesRepository = repository
    }

    findOne(id: string) {
        return this.messagesRepository.findOne(id);
    }

    findAll() {
        return this.messagesRepository.findAll();
    }

    create(content: string) {
        return this.messagesRepository.create(content);
    }




}