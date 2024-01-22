import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller(`auth`)
export class AuthController {
  //instancia de auth service // private es un atajo para instanciar la clase
  constructor(private authService: AuthService) {}

  @Post(`signup`)
  signup() {
    return this.authService.signup();
  }

  @Post(`signin`)
  signin() {
    return this.authService.signin();
  }
}
