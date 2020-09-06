import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding: 0 16px;
  margin-top: 32px;
`;

export const Grid = styled.div`
  position: relative;
  display: flex;

  width: 100%;
  height: 100%;
  margin-top: 16px;
`;

export const Row = styled.div`
  position: relative;
  display: flex;

  scroll-behavior: smooth;

  div {
    transform: translate3d(200, 0, 0);
  }

  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonScroll = styled.div`
  display: flex;
  align-items: center;

  min-height: 100%;
  padding: 0 12px;
  font-size: 24px;

  background-color: transparent;

  z-index: 99;
  cursor: pointer;

  opacity: 0.4;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
    font-size: 28px;
    background-color: var(--color-dark-light);
  }
`;
