import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      name: 'desta',
      email: 'desta@gmail.com',
    },
    {
      id: 2,
      name: 'diva',
      email: 'diva@gmail.com',
    },
    {
      id: 3,
      name: 'yasmeen',
      email: 'yasmeen@gmail.com',
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }

  getCustomers() {
    return this.customers;
  }
}
