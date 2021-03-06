import { useState } from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import { Reactions } from "./App/constants";
import { ReactionsForm } from "./App/ReactionsForm";
import { DetailsForm } from "./App/DetailsForm";
import { getTitle } from "./App/getTitle";
import { useAppAnimations } from "./App/useAppAnimations";
import { Submited } from "./App/Submited";
import { Footer } from "./App/Footer";

const Root = styled.div`
  height: 100%;
  display: grid;
  justify-items: center;
  grid-template-rows: 1fr 60px;
`;

const Container = styled.div`
  max-width: 400px;
`;

const Title = styled(animated.h1)`
  margin: 50px 0 30px 0;
  font-size: 28px;
  color: #111;
  font-weight: 500;
`;

const SubTitle = styled(animated.div)`
  font-size: 16px;
  color: #555;
`;

const detailsList = [
  "Duration",
  "Content",
  "Slides",
  "Tone",
  "Speed",
  "Audience",
  "Reasoning",
  "Agenda"
];

export default function App() {
  const [submited, setSubmited] = useState(false);
  const [reaction, setReaction] = useState<Reactions | null>(null);
  const [
    subtitleAnimation,
    detailsFormAnimation,
    titleAnimation
  ] = useAppAnimations(reaction);

  const selectReaction = (r: Reactions) => () =>
    reaction ? setReaction(null) : setReaction(r);

  const handleSubmit = () => setSubmited(true);

  if (submited) {
    return <Submited />;
  }

  return (
    <Root>
      <Container>
        <Title style={titleAnimation}>{getTitle(reaction)}</Title>
        <SubTitle style={subtitleAnimation}>
          Your feedback helps the organizer to improve the future meetings.
        </SubTitle>
        <ReactionsForm reaction={reaction} selectReaction={selectReaction} />
        <animated.div style={detailsFormAnimation}>
          <DetailsForm
            items={detailsList}
            reaction={reaction}
            setReaction={setReaction}
            onSubmit={handleSubmit}
          />
        </animated.div>
      </Container>
      <Footer />
    </Root>
  );
}
