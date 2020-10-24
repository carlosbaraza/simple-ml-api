import { CircularProgress } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";
import { ApiSentimentAnalysisResult } from "../services/sentiment-analysis";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 10px;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  background: #eeeeee;
  border-radius: 5px;
  padding: 20px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 20px;
`;

type Props = {
  loading: boolean;
  result?: ApiSentimentAnalysisResult;
};

export const SentimentAnalysisResults: FC<Props> = (props) => {
  const { loading, result } = props;

  const label = result?.[0]?.label;
  const score = result?.[0]?.score;

  return (
    <Container>
      <Title>Results</Title>

      <Inner>
        {loading ? (
          <CircularProgress />
        ) : (
          <div>
            <div>Label: {label}</div>
            <div>Score: {score}</div>
          </div>
        )}
      </Inner>
    </Container>
  );
};
