import { Controller } from '@nestjs/common';
import { AuthService } from './providers/auth.service';

/**
 * AuthController is the controller for the auth
 */
@Controller('auth')
/**
 * Constructor
 * @param authService - The auth service
 */
export class AuthController {
  constructor(private readonly authService: AuthService) {}
}
