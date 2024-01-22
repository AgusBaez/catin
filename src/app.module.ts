import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [AuthModule, UserModule, CatModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
