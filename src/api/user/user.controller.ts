import { Controller, Get } from "@nestjs/common";

@Controller("api/users")
export default class UserController {
  @Get("list")
  list(): Array<any> {
    return [
      {
        id: 1,
        name: "Pepito",
        last_name: "Junito",
      },
    ];
  }
}
