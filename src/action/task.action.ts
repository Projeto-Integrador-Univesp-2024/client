import { TaskType } from "@/types/task";
import { BackendURL } from "./../lib/constants";
import { FetchClass } from "./fetch.action";
import { DashboardTaskFormValues } from "@/schemas/dashboard/tasks/task-schema";

export class TaskClass extends FetchClass {
	private readonly taskUrl = BackendURL + "/task";

	public async create(values: DashboardTaskFormValues) {
		try {
			return await this.POST(
				this.taskUrl,
				{
					name: values.name,
					points: values.points,
					deadline: values.deadline,
					taskTypeId: values.taskTypeId,
				},
				true,
			);
		} catch (error) {
			console.error("Error pushing task:", error);
			throw error;
		}
	}

	public async update(values: DashboardTaskFormValues, taskId: number) {
		try {
			return await this.PATCH(
				this.taskUrl + `/${taskId}`,
				{
					name: values.name,
					points: values.points,
					deadline: values.deadline,
					taskTypeId: values.taskTypeId,
				},
				true,
			);
		} catch (error) {
			console.error("Error updating task:", error);
			throw error;
		}
	}

	public async findAllByChild(id: string): Promise<TaskType.Item[]> {
		try {
			return await this.GET(this.taskUrl + `/child/${id}`, true);
		} catch (error) {
			console.error("Error pushing user:", error);
			throw error;
		}
	}

	public async findAllByGuardian(id: string): Promise<TaskType.Guardian[]> {
		try {
			return await this.GET(this.taskUrl + `/guardian/${id}`, true);
		} catch (error) {
			console.error("Error pushing user:", error);
			throw error;
		}
	}

	public async findOne(id: number): Promise<TaskType.Item> {
		try {
			return await this.GET(this.taskUrl + `/detail/${id}`, true);
		} catch (error) {
			console.error("Error pushing user:", error);
			throw error;
		}
	}

	public async check(id: number) {
		try {
			return await this.POST(this.taskUrl + `/check/${id}`, {}, true);
		} catch (error) {
			console.error("Error checking task:", error);
			throw error;
		}
	}
}
