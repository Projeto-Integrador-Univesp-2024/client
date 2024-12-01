import { SignInFormValues } from "@/schemas/auth/signin-schema";
import { BackendURL } from "./../lib/constants";
import { FetchClass } from "./fetch.action";
import { AuthType } from "@/types/auth";

export class AuthClass extends FetchClass {
  private readonly authUrl = BackendURL + "/auth";

  public async login(values: SignInFormValues): Promise<AuthType.Response> {
    try {
      return await this.POST(
        this.authUrl + "/login",
        {
          email: values.email,
          password: values.password,
        },
        false,
      );
    } catch (error) {
      console.error("Error on authentication:", error);
      throw error;
    }
  }

  public async validate({ token, id }: { token: string; id: number }) {
    try {
      return await this.POST(
        this.authUrl + "/validate",
        {
          token,
          id,
        },
        false,
      );
    } catch (error) {
      console.error("Error on validate user:", error);
      throw error;
    }
  }
}
