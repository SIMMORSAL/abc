import { ModelArticle } from "../models/ModelArticle";

export async function getArticle({
  queryKey,
}: {
  queryKey: Array<string | number>;
}): Promise<ModelArticle> {
  const response = await fetch(
    `/api/getArticle?id=${queryKey[1]}`,
    {
      method: "POST",
    }
  );

  if (response.status !== 200)
    throw "An error occurred\nPlease try again";
  return response.json();
}
