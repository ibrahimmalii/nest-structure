import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getWelcome(): string{
    return 'welcome ibrahim';
  }
}
