import { MetricsType } from "@/types/metrics";
import { BackendURL } from "./../lib/constants";
import { FetchClass } from "./fetch.action";

export class MetricsClass extends FetchClass {
  private readonly metricUrl = BackendURL + "/metrics";

  public async find(id: string): Promise<MetricsType.Item> {
    try {
      return await this.GET(this.metricUrl + `/${id}`, true);
    } catch (error) {
      console.error("Error pushing metrics:", error);
      throw error;
    }
  }

  public async findLastTasks(
    id: string,
    filter: MetricsType.LastTasksFilter,
  ): Promise<MetricsType.LastTasks[]> {
    try {
      return await this.GET(
        this.metricUrl + `/lastTasks/${id}?filter=${filter}`,
        true,
      );
    } catch (error) {
      console.error("Error pushing lastTasks:", error);
      throw error;
    }
  }

  public async findChildren(id: number): Promise<MetricsType.Child[]> {
    try {
      return await this.GET(this.metricUrl + `/child/${id}`, true);
    } catch (error) {
      console.error("Error pushing metrics:", error);
      throw error;
    }
  }
}
