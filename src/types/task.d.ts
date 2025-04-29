import { RecurrenceTypeEnum } from "@/schemas/dashboard/task-types/task-type-schema";
import { ChildType } from "./child";
import { UserType } from "./user";

declare namespace TaskType {
	type Guardian = {
		id: number;
		userChildId: number;
		userGuardianId: number;
		points: number;
		tasksNeedsApproval: boolean;
		createdAt: string;
		updatedAt: string;
		deletedAt?: string;
		tasks: Item[];
		user: UserType.User;
	};

	type Item = {
		id: number;
		childId: number;
		taskTypeId: number;
		name: string;
		points: number;
		status: "PENDING" | "DONE" | "FAILED";
		deadline: string;
		createdAt: string;
		updatedAt: string;
		deletedAt?: string;
		child: ChildType.Child;
		tasktypes: Type;
	};

	type Type = {
		id: number;
		name: string;
		recurrence: number;
		recurrenceType: RecurrenceTypeEnum;
		color: string;
		createdAt: string;
		updatedAt: string;
		deletedAt?: string;
	};
}
