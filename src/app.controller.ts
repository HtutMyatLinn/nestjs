import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * AppController is the controller for the app
 */
@Controller()
export class AppController {
  /**
   * Constructor
   * @param appService - The app service
   */
  constructor(private readonly appService: AppService) {}
  /**
   * Get the hello world message
   * @returns The hello world message
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
