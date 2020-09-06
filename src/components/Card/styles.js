import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
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

export const Remove = styled.div`
  position: absolute;
  font-size: 32px;

  right: 12px;
  top: 12px;

  color: var(--color-primary);

  z-index: 999;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Favorite = styled.div`
  position: absolute;

  top: 12px;
  right: 12px;
  font-size: 32px;

  color: var(--color-primary);

  z-index: 999;

  &:hover {
    transform: scale(1.2);
  }
`;
