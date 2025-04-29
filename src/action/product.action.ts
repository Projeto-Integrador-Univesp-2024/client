import { BackendURL } from "@/lib/constants";
import { FetchClass } from "./fetch.action";

export class ProductClass extends FetchClass {
	private readonly productUrl = BackendURL + "/product";

	public async findAll(guardianId: string) {
		try {
			return await this.GET(`${this.productUrl}/${guardianId}`, true);
		} catch (error) {
			console.error("Error finding products:", error);
			throw error;
		}
	}
}
