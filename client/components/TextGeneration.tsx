import { TextareaAutosize } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import styled from "styled-components";
import { ApiTextGenerationResult, fetchTextGeneration } from "../services/text-generation";
import { TextGenerationResults } from "./TextGenerationResults";

const Title = styled.h1`
  margin: 0;
`;

const Container = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 20px;
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

export const TextGeneration = (props) => {
  const [text, setText] = useState(
    "Once upon a time there was a king’s daughter, who was so handsome, there was nothing in the world to be compared with her for beauty. One day"
  );
  const [result, setResult] = useState<ApiTextGenerationResult>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e?) => {
    e?.preventDefault();

    if (loading) return;
    setLoading(true);

    const response = await fetchTextGeneration(text);
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
      <Title>Text Generation</Title>
      <Form onSubmit={onSubmit}>
        <Textarea
          rowsMin={2}
          value={text}
          onChange={(t) => setText(t.target.value)}
          onKeyDown={onKeyDown}
        />
        <Button type="submit" variant="contained" color="primary" disabled={loading}>
          {loading ? "Loading..." : "Generate more text"}
        </Button>
      </Form>
      <TextGenerationResults loading={loading} result={result} />
    </Container>
  );
};
