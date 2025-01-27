import styled from "styled-components";

type FlexWrapperPropsType = {
  direction?: string;
  justify?: string;
  alignItems?: string;
  gap?: number;
  wrap?: string;
  height?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  justify-content: ${(props) => props.justify || undefined};
  align-items: ${(props) => props.alignItems || undefined};
  direction: ${(props) => props.direction || "row"};
  flex-wrap: ${(props) => props.wrap || undefined};
  height: ${(props) => props.height || undefined};
`;
