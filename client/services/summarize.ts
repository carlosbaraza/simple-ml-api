export type ApiSummarizeResult = {
  summary: string;
};

export async function fetchSummarize(text: string): Promise<ApiSummarizeResult> {
  const response = await fetch("http://localhost:5000/summarize", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  const json = await response.json();
  return json;
}
