import { UserType } from "@/types/user";
import { BackendURL } from "./../lib/constants";
import { SignUpFormValues } from "./../schemas/auth/signup-schema";
import { FetchClass } from "./fetch.action";
import { AuthType } from "@/types/auth";

export class UserClass extends FetchClass {
  private readonly authUrl = BackendURL + "/user";
  public async create(values: SignUpFormValues): Promise<AuthType.Response> {
    try {
      return await this.POST(
        this.authUrl,
        {
          name: values.name,
          email: values.email,
          password: values.password,
          dateOfBirth: values.dateOfBirth,
          userTypeId: 2,
        },
        false,
      );
    } catch (error) {
      console.error("Error pushing user:", error);
      throw error;
    }
  }

  public async find(id: number): Promise<UserType.User> {
    try {
      return await this.GET(this.authUrl + `/${id}`, true);
    } catch (error) {
      console.error("Error pushing user:", error);
      throw error;
    }
  }
}
