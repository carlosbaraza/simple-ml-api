import { CircularProgress } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";
import { ApiTextGenerationResult } from "../services/text-generation";

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
  result?: ApiTextGenerationResult;
};

export const TextGenerationResults: FC<Props> = (props) => {
  const { loading, result } = props;

  if (!loading && !result) return null;

  const generatedText = result?.[0]?.generated_text;

  return (
    <Container>
      <Title>Generated text</Title>

      <Inner>{loading ? <CircularProgress /> : <div>{generatedText}</div>}</Inner>
    </Container>
  );
};
