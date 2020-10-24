import React, { useState } from "react";
import styled from "styled-components";
import { TextareaAutosize } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { SentimentAnalysisResults } from "./SentimentAnalysisResults";
import { ApiSentimentAnalysisResult, fetchSentimentAnalysis } from "../services/sentiment-analysis";

const Title = styled.h1`
  margin: 0;
`;

const Container = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > * + * {
    margin-top: 10px;
  }
`;

const Textarea = styled(TextareaAutosize)`
  padding: 20px;
  width: 100%;
`;

export const SentimentAnalysis = (props) => {
  const [text, setText] = useState(
    "We are very happy to include pipeline into the transformers repository."
  );
  const [result, setResult] = useState<ApiSentimentAnalysisResult>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e?) => {
    e?.preventDefault();

    if (loading) return;
    setLoading(true);

    const response = await fetchSentimentAnalysis(text);
    setResult(response);
    setLoading(false);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.keyCode == 13 && event.metaKey) {
      onSubmit();
    }
  };

  return (
    <Container>
      <Title>Sentiment analysis</Title>
      <Form onSubmit={onSubmit}>
        <Textarea
          rowsMin={2}
          value={text}
          onChange={(t) => setText(t.target.value)}
          onKeyDown={onKeyDown}
        />
        <Button type="submit" variant="contained" color="primary" disabled={loading}>
          {loading ? "Loading..." : "Analyze"}
        </Button>
      </Form>
      <SentimentAnalysisResults loading={loading} result={result} />
    </Container>
  );
};
