import { Injectable } from '@nestjs/common';

/**
 * AppService is the service for the app
 */
@Injectable()
export class AppService {
  /**
   * Get the hello linn message
   * @returns The hello linn message
   */
  getHello(): string {
    return 'Hello Linn!';
  }
}
