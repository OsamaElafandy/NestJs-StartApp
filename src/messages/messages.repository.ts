import { Injectable } from '@nestjs/common';

import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
    async findOne(id: string) {
        const contents = await readFile('src/data/messages.json', 'utf-8');
        const messages = JSON.parse(contents);
        return messages[id];
    }

    async findAll() {
        const contents = await readFile('src/data/messages.json', 'utf-8');
        const messages = JSON.parse(contents);
        return messages;
    }

    async create(message: string) {
        const contents = await readFile('src/data/messages.json', 'utf-8');
        const messages = JSON.parse(contents);
        const id = Math.floor(Math.random() * 999);
        messages[id] = { id, content: message };
        await writeFile('src/messages.json', JSON.stringify(messages));
        return messages[id];
    }
}