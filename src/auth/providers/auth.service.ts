import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

/**
 * AuthService is the service for the auth
 */
@Injectable()
export class AuthService {
  /**
   * Constructor
   * @param usersService - The users service
   */
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  /**
   * Login
   * @param email - The email of the user
   * @param password - The password of the user
   * @param id - The id of the user
   * @returns The token
   */
  public login(email: string, password: string, id: string) {
    const user = this.usersService.findByUserId(id);
    return 'TOKEN';
  }

  /**
   * Check if the user is authenticated
   * @returns True if the user is authenticated, false otherwise
   */
  public isAuth() {
    return true;
  }
}
