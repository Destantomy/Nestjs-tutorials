import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/types/index';

@Injectable()
export class UsersService {
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
}
