import { BackendURL } from "@/lib/constants";
import { FetchClass } from "./fetch.action";
import { TaskType } from "@/types/task";
import { DashboardTaskTypeFormValues } from "@/schemas/dashboard/task-types/task-type-schema";

export class TaskTypeClass extends FetchClass {
	private readonly taskTypeUrl = BackendURL + "/task-type";

	public async find(id: string): Promise<TaskType.Type[]> {
		try {
			return await this.GET(this.taskTypeUrl + `/${id}`, true);
		} catch (error) {
			console.error("Error pushing taskType:", error);
			throw error;
		}
	}

	public async findOne(id: number): Promise<TaskType.Type> {
		try {
			return await this.GET(this.taskTypeUrl + `/detail/${id}`, true);
		} catch (error) {
			console.error("Error pushing taskTypeId:", error);
			throw error;
		}
	}

	public async create(values: DashboardTaskTypeFormValues) {
		try {
			return await this.POST(
				this.taskTypeUrl,
				{
					name: values.name,
					color: values.color,
					recurrence: values.recurrence,
					recurrenceType: values.recurrenceType,
				},
				true,
			);
		} catch (error) {
			console.error("Error pushing taskType:", error);
			throw error;
		}
	}

	public async update(
		values: DashboardTaskTypeFormValues,
		taskTypeId: number,
	) {
		try {
			return await this.PATCH(
				this.taskTypeUrl + `/${taskTypeId}`,
				{
					name: values.name,
					color: values.color,
					recurrence: values.recurrence,
					recurrenceType: values.recurrenceType,
				},
				true,
			);
		} catch (error) {
			console.error("Error updating taskType:", error);
			throw error;
		}
	}
}
