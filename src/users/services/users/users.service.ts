import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from 'src/typeorm';
import { CreateUserDto } from 'src/users/dto/Create.dto';
import { SerializedUser, User } from 'src/users/types/index';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  // insert dara into array
  private users: User[] = [
    {
      id: 1,
      username: 'desta',
      password: 'desta1234',
    },
    {
      id: 2,
      username: 'diva',
      password: 'diva1234',
    },
    {
      id: 3,
      username: 'yasmeen',
      password: 'yasmeen1234',
    },
  ];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
  // /insert data into array
  createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }
}
