export type ApiTextGenerationResult = Array<{
  generated_text: string;
}>;

export async function fetchTextGeneration(text: string): Promise<ApiTextGenerationResult> {
  const response = await fetch("http://localhost:5000/text-generation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  const json = await response.json();
  return json;
}
