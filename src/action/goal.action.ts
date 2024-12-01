import { BackendURL } from "@/lib/constants";
import { FetchClass } from "./fetch.action";
import { GoalType } from "@/types/goal";
import { DashboardGoalFormValues } from "@/schemas/dashboard/goals/goal-schema";

export class GoalsClass extends FetchClass {
  private readonly goalUrl = BackendURL + "/goal";

  public async create(values: DashboardGoalFormValues) {
    try {
      return await this.POST(
        this.goalUrl,
        {
          title: values.title,
          points: values.points,
          childId: values.childId,
        },
        true,
      );
    } catch (error) {
      console.error("Error pushing goal:", error);
      throw error;
    }
  }

  public async update(values: DashboardGoalFormValues, goalId: number) {
    try {
      return await this.PATCH(
        this.goalUrl + `/${goalId}`,
        {
          title: values.title,
          points: values.points,
          childId: values.childId,
        },
        true,
      );
    } catch (error) {
      console.error("Error updating goal:", error);
      throw error;
    }
  }

  public async findOne(id: number): Promise<GoalType.Item> {
    try {
      return await this.GET(this.goalUrl + `/detail/${id}`, true);
    } catch (error) {
      console.error("Error finding goals:", error);
      throw error;
    }
  }

  public async findAllByGuardian(guardianId: string): Promise<GoalType.Item[]> {
    try {
      return await this.GET(this.goalUrl + `/guardian/${guardianId}`, true);
    } catch (error) {
      console.error("Error finding goals:", error);
      throw error;
    }
  }
}
