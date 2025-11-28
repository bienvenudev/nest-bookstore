import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // just added this to see how it would turn out?
  getBye(): string {
    return 'Bye World!';
  }
}
