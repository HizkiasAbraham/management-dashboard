import { getRequest } from "@/app/api/config";
import { cookies } from "next/headers";

export async function GET(
  _: Request,
  data: { params: { id: string } }
): Promise<Response> {
  try {
    const id = data.params.id;
    const authToken = cookies().get("authToken");

    const result = await getRequest(
      `client/projects/${id}`,
      authToken?.value as string
    );
    const resultJson = await result.json();

    return Response.json({ data: resultJson });
  } catch (error) {
    console.log("error here", error);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
