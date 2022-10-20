import { ModelArticle } from "../models/ModelArticle";

export async function getArticle({
  queryKey,
}: {
  queryKey: Array<string | number>;
}): Promise<ModelArticle> {
  const response = await fetch(`/api/getArticle?id=${queryKey}`, {
    method: "POST",
  });
  return response.json();
}
