import { useState } from "react";
import styled from "styled-components";
import { Button, Box, Flex } from "@chakra-ui/react";
import { BiRocket, BiTrash } from "react-icons/bi";
import { useSpring, animated } from "react-spring";
import { Reactions } from "./constants";
import { ReactionsForm } from "./ReactionsForm";
import { DetailsForm } from "./DetailsForm";

const Root = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 400px;
  display: inline-grid;
  grid-template-rows: 70px 60px 140px 80px;
  grid-template-columns: 300px;
  grid-gap: 3px;
  justify-items: center;
  align-items: center;
`;

const Title = styled(animated.h1)`
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
  const [reaction, setReaction] = useState<Reactions | null>(null);

  const hideWhenReacted = useSpring(
    reaction
      ? {
          from: { opacity: 1 },
          to: { opacity: 0 }
        }
      : {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
  );

  const showWhenReacted = useSpring(
    reaction
      ? {
          from: { opacity: 0, transform: "translate(0,0)" },
          to: { opacity: 1, transform: "translate(0,-60px)" }
        }
      : {
          from: { opacity: 1, transform: "translate(0,-60px)" },
          to: { opacity: 0, transform: "translate(0,0)" }
        }
  );

  const moveDownWhenReacted = useSpring(
    reaction
      ? {
          from: { transform: "translate(0,0)" },
          to: { transform: "translate(0,100px)" }
        }
      : {
          from: { transform: "translate(0,100px)" },
          to: { transform: "translate(0,0)" }
        }
  );

  const selectReaction = (r: Reactions) => () =>
    reaction ? setReaction(null) : setReaction(r);

  const resetReaction = () => {
    setReaction(null);
  };

  return (
    <Root>
      <Container>
        <Title style={moveDownWhenReacted}>
          {reaction ? "What to improve?" : "How was the meeting?"}
        </Title>
        <SubTitle style={hideWhenReacted}>
          Your feedback helps the organizer to improve the future meetings.
        </SubTitle>
        <ReactionsForm reaction={reaction} selectReaction={selectReaction} />
        <animated.div style={showWhenReacted}>
          <DetailsForm items={detailsList} />
        </animated.div>
        <Flex direction="column">
          <Box p={2}>
            <Button
              rightIcon={<BiRocket />}
              disabled={!reaction}
              colorScheme="green"
              variant="solid"
            >
              Send the feedback
            </Button>
          </Box>
          <Box p={2}>
            <Button
              rightIcon={<BiTrash />}
              disabled={!reaction}
              colorScheme="pink"
              variant="outline"
              onClick={resetReaction}
            >
              Reset
            </Button>
          </Box>
        </Flex>
      </Container>
    </Root>
  );
}
