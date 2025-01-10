import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  status() {
    return { status: 'ok', timestamp: new Date() };
  }
}
