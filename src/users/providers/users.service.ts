import { BadRequestException, forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/providers/auth.service';
import { PutUserDto } from '../dtos/put.user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create.user.dto';

/**
 * UsersService is a service that provides methods to manage users
 */
@Injectable()
export class UsersService {
  /**
   * Constructor
   * @param authService - The auth service
   */
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,

    /**
     * inject the user repository
     * @param userRepository - The user repository
     */
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  /**
   * Create a user
   * @param createUserDto - The user data to create
   * @returns The created user
   */
  public async createUser(createUserDto: CreateUserDto) {
    // existing user check
    const existingUser = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });
    if (existingUser) {
      throw new BadRequestException('User already exists with this email');
    }

    let newUser = this.userRepository.create(createUserDto);
    newUser = await this.userRepository.save(newUser);
    return newUser;
  }
  /**
   * Find all users
   * @param limit - The limit of users to return
   * @param page - The page number to return
   * @returns An array of users
   */
  public findAll(limit: number, page: number) {
    const isAuth = this.authService.isAuth();
    console.log('isAuth', isAuth);
    return [
      {
        name: 'John Doe',
        age: 20,
      },
      {
        name: 'Jane Doe',
        age: 21,
      },
      limit,
      page,
    ];
  }
  /**
   * Find a user by user ID
   * @param userId - The user ID to find
   * @returns The user
   */
  public findByUserId(userId: string) {
    return {
      id: userId,
      name: 'John Doe',
      age: 20,
    };
  }
  /**
   * Find a user by user ID
   * @param id - The user ID to find
   * @returns The user
   */
  public fn1(id: number) {
    return {
      id: id,
      name: 'John Doe',
      age: 20,
    };
  }
  /**
   * Update a user
   * @param putUserDto - The user data to update
   * @returns The updated user
   */
  public putUser(putUserDto: PutUserDto) {
    return {
      ...putUserDto,
    };
  }
}
