import { Controller , Get , Post , Body , Param} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dtos';
@Controller('messages')
export class MessagesController {

    @Get()
    listMessages(): string {
        return 'Hello listMessages!';
    }

    @Post()
    createMessages(@Body() body: CreateMessageDto)  {
        console.log(body);
        return 'Hello createMessages $body !';
    }

    @Get('/:id')
    getMessage(@Param('id') id: number): string {
        console.log(id);
        return 'Hello getMessage!';
    }

}
