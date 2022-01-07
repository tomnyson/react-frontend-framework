import { Controller, Request, UseGuards, Post, Get } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) { }

  @Post('api/auth/login')
  async login(@Request() req): Promise<any> {
    return this.authService.login(req.body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): Promise<any> {
    return req.user
  }

}
