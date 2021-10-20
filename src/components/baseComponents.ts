import styled from 'styled-components';

export const BaseContainer = styled.div`
  margin: 0 auto;
  padding-left: ${(props) => props.theme.sizes.mobileHorizontalSpacing}px;
  padding-right: ${(props) => props.theme.sizes.mobileHorizontalSpacing}px;
  width: 100%;
  @media screen and (min-width: ${(props) =>
      props.theme.sizes.containerMaxWidth +
      props.theme.sizes.mobileHorizontalSpacing * 2}px) {
    max-width: ${(props) => props.theme.sizes.containerMaxWidth}px;
    padding-left: 0;
    padding-right: 0;
  }
`;
