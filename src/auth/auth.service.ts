import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
  signin() {
    return { msg: `you are Sing In` };
  }

  signup() {
    return { msg: `Hello, This is your First time Here` };
  }
}
