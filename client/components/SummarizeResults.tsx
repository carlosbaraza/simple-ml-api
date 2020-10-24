import { CircularProgress } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";
import { ApiSummarizeResult } from "../services/summarize";

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
  result?: ApiSummarizeResult;
};

export const SummarizeResults: FC<Props> = (props) => {
  const { loading, result } = props;

  if (!loading && !result) return null;

  const summary = result?.summary;

  return (
    <Container>
      <Title>Summary</Title>

      <Inner>{loading ? <CircularProgress /> : <div>{summary}</div>}</Inner>
    </Container>
  );
};
