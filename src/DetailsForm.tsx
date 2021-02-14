import { Textarea } from "@chakra-ui/react";
import { FC } from "react";
import styled from "styled-components";
import { ButtonCheckbox } from "./ButtonCheckbox";

type Props = {
  items: string[];
};

const Label = styled.div`
  font-size: 16px;
  color: #555;
`;

export const DetailsForm: FC<Props> = ({ items }) => {
  return (
    <div>
      {items.map((label) => (
        <ButtonCheckbox label={label} />
      ))}
      <Label>
        <span>Write something for the organizer</span>
        <Textarea />
      </Label>
    </div>
  );
};
