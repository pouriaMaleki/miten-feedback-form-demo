import styled from "styled-components";
import { usePrevious } from "@chakra-ui/react";
import { Reactions } from "./constants";
import { useReactionAnimations } from "./ReactionsForm/useReactionAnimations";
import { AnimatedEmojiButton } from "./ReactionsForm/AnimatedEmojiButton";

const Root = styled.div`
  display: inline-grid;
  grid-template-columns: 70px 70px 70px 70px 70px;
  grid-gap: 3px;
  justify-items: center;
  align-items: center;
`;

export const ReactionsForm = ({ reaction, selectReaction }) => {
  const prevReaction = usePrevious(reaction);
  const [
    horribleAnimation,
    badAnimation,
    mehAnimation,
    goodAnimation,
    awesomeAnimation
  ] = useReactionAnimations(reaction, prevReaction);

  return (
    <Root>
      <AnimatedEmojiButton
        onClick={selectReaction(Reactions.HORRIBLE)}
        emoji="😠"
        label="Horrible"
        animation={horribleAnimation}
      ></AnimatedEmojiButton>
      <AnimatedEmojiButton
        onClick={selectReaction(Reactions.BAD)}
        emoji="😕"
        label="Bad"
        animation={badAnimation}
      ></AnimatedEmojiButton>
      <AnimatedEmojiButton
        onClick={selectReaction(Reactions.MEH)}
        emoji="😐"
        label="Meh"
        animation={mehAnimation}
      ></AnimatedEmojiButton>
      <AnimatedEmojiButton
        onClick={selectReaction(Reactions.GOOD)}
        emoji="😊"
        label="Good"
        animation={goodAnimation}
      ></AnimatedEmojiButton>
      <AnimatedEmojiButton
        onClick={selectReaction(Reactions.AWESOME)}
        emoji="😍"
        label="Awesome"
        animation={awesomeAnimation}
      ></AnimatedEmojiButton>
    </Root>
  );
};
