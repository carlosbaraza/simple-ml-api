export type ApiSentimentAnalysisResult = Array<{
  label: string;
  score: number;
}>;

export async function fetchSentimentAnalysis(text: string): Promise<ApiSentimentAnalysisResult> {
  const response = await fetch("http://localhost:5000/sentiment-analysis", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  const json = await response.json();
  return json;
}
