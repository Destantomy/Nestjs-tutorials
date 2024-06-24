import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const request = context.getRequest<Request>();
    const response = context.getResponse<Response>();

    // response.sendStatus(exception.getStatus());
    response.send({
      status: exception.getStatus(),
      message: exception.getResponse(),
    });
  }
}
