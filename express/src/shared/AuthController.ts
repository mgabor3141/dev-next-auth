import { BackendMethod, remult } from "remult";

export class AuthController {
  @BackendMethod({ allowed: true })
  static async currentUser() {
    return remult.user;
  }
}
