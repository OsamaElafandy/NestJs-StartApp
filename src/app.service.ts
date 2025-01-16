import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHi(): string {
    return 'I Say HiII !';
  }
}
