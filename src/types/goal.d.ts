import { ChildType } from "./child";

declare namespace GoalType {
	type Item = {
		id: number;
		childId: number;
		title: string;
		points: number;
		createdAt: string;
		updatedAt: string;
		deletedAt?: string;
		child: ChildType.Child;
	};
}
