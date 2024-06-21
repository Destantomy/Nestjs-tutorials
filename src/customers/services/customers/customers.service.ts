import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      email: 'desta@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 2,
      email: 'diva@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 3,
      email: 'yasmeen@gmail.com',
      createdAt: new Date(),
    },
  ];

  findCustomerById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
