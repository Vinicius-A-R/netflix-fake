import styled from 'styled-components';

export const Container = styled.div`
  width: 160px;

  cursor: pointer;

  img {
    width: 160px;
    transform: scale(0.9);
    transition: transform ease-out 0.2s;

    &:hover {
      transform: scale(1);
    }
  }
`;
