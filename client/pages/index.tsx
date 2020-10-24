import Head from "next/head";
import styled from "styled-components";
import { SentimentAnalysis } from "../components/SentimentAnalysis";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Transformers Examples</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <SentimentAnalysis />
      </Main>
    </Container>
  );
}
