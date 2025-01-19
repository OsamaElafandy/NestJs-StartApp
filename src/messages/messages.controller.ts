import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dtos';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    private messagesService: MessagesService;

    constructor(service: MessagesService) {
        this.messagesService = service
    }

    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessages(@Body() body: CreateMessageDto) {
        console.log(body);
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string) {
        const message = await this.messagesService.findOne(id);
        if (!message) {
            throw new NotFoundException('message not found');
        }
        return message;
    }

}
