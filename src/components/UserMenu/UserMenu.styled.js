import styled from 'styled-components';

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${'' /* min-width: 120px; */}
  text-decoration: none;
  color: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  background-color: rgba(90, 200, 70, 0.2);
  border-radius: 8px 8px 0px 0px;
  padding: 5px;
  padding-left: 15px;

  &.active {
    background-color: rgba(90, 200, 70, 0.8);
    color: white;
  }

  ${
    '' /* :hover:not(.active),
  :focus-visible:not(.active) {
    color: rgb(90, 200, 70);
  } */
  }
`;
