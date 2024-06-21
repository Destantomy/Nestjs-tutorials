import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  @Get(':id')
  getCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    // console.log(typeof id);
    const customer = this.customersService.findCustomerById(id);
    if (customer) {
      return res.status(200).send(customer);
    }
    return res.status(400).send({ msg: 'customer not found' });
  }
  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.findCustomerById(id);
    if (customer) {
      return customer;
    }
    throw new HttpException('customer not found', HttpStatus.BAD_REQUEST);
  }
  @Get()
  getAllCustomers() {
    return this.customersService.getCustomers();
  }
  @Post('create')
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    // console.log(createCustomerDto);
    this.customersService.createCustomer(createCustomerDto);
  }
}
