import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Home';
  }

  getAll():string{
    return "hello";
  }
}
