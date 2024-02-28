import { Module } from "@nestjs/common";
import { AuthModule } from "./api/auth/auth.module";
import UserModule from "./api/user";
import { CatModule } from "./api/cat/cat.module";

@Module({
  imports: [AuthModule, UserModule, CatModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
