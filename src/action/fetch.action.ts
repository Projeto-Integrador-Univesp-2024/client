import { getSession } from "next-auth/react";

export class FetchClass {
  private async getToken(): Promise<string> {
    try {
      const session = await getSession();

      const token = session?.accessToken;

      if (!token) throw new Error();

      return token;
    } catch (error) {
      console.error("Error on getting Token:", error);
      throw error;
    }
  }

  private async response(
    url: string,
    method: "GET" | "POST" | "PATCH" | "DELETE",
    token: boolean,
    body?: BodyInit | null,
  ) {
    try {
      const headers: HeadersInit | undefined = {
        "Content-Type": "application/json",
      };

      if (token) {
        headers["Authorization"] = `Bearer ${await this.getToken()}`;
      }

      const response = await fetch(url, {
        method,
        headers,
        body,
      });

      return await response.json();
    } catch (error) {
      console.error("Error on Fetch:", error);
      throw error;
    }
  }

  public async GET(url: string, token: boolean) {
    try {
      const response = await this.response(url, "GET", token);

      if (response.data === null) throw new Error();

      return response.data;
    } catch (error) {
      console.error("Error on GET:", error);
      throw error;
    }
  }

  public async POST(url: string, body: object, token: boolean) {
    try {
      return await this.response(url, "POST", token, JSON.stringify(body));
    } catch (error) {
      console.error("Error on POST:", error);
      throw error;
    }
  }

  public async PATCH(url: string, body: object, token: boolean) {
    try {
      return await this.response(url, "PATCH", token, JSON.stringify(body));
    } catch (error) {
      console.error("Error on PATCH:", error);
      throw error;
    }
  }
}
