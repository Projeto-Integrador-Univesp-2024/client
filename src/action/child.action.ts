import { BackendURL } from "@/lib/constants";
import { FetchClass } from "./fetch.action";
import { DashboardChildFormValues } from "@/schemas/dashboard/childs/child-schema";
import { ChildType } from "@/types/child";

export class ChildClass extends FetchClass {
  private readonly childUrl = BackendURL + "/child";

  public async findOne(publicId: string): Promise<ChildType.Response> {
    return await this.GET(`${this.childUrl}/${publicId}`, true);
  }

  public async findAll(publicId: string): Promise<ChildType.Response[]> {
    const children = await this.GET(
      `${this.childUrl}/guardian/${publicId}`,
      true,
    );

    children.map((child: ChildType.Response) => {
      const dateOfBirth = new Date(child.user.dateOfBirth);
      child.user.age = new Date().getFullYear() - dateOfBirth.getFullYear();
    });

    return children;
  }

  public async updateChild(values: DashboardChildFormValues, userId: string) {
    try {
      return await this.PATCH(
        this.childUrl + `/${userId}`,
        {
          userTypeId: 3,
          ...values,
        },
        true,
      );
    } catch (error) {
      console.error("Error creating Child:", error);
      throw error;
    }
  }

  public async createChild(
    values: DashboardChildFormValues,
    guardianId: string,
  ) {
    try {
      return await this.POST(
        this.childUrl,
        {
          userTypeId: 3,
          guardianId,
          ...values,
        },
        true,
      );
    } catch (error) {
      console.error("Error creating Child:", error);
      throw error;
    }
  }
}
