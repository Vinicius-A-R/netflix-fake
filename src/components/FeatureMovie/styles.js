import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 560px;
  margin-left: 24px;
  margin-bottom: 48px;

  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.image});

  @media (min-width: 900px) {
    height: 640px;
  }
`;

export const Logo = styled.div.attrs((props) => ({
  id: props.visible ? 'visible' : '',
}))`
  position: fixed;
  display: flex;
  align-items: center;

  top: 0;
  width: 100%;
  max-width: 1400px;
  height: 96px;

  z-index: 999;
  transition: background-color 0.2s ease-in-out;

  &#visible {
    opacity: 0.9;
    align-items: center;
    justify-content: center;
    background-color: #141414;
  }

  img {
    height: 40px;
    cursor: pointer;

    &:hover {
      margin-left: 16px;
      transform: scale(1.2);
    }
  }
`;

export const FeaturedVertical = styled.div`
  width: inherit;
  height: inherit;

  background: linear-gradient(to top, var(--color-dark) 10%, transparent 90%);
`;

export const FeaturedHorizontal = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, var(--color-dark) 20%, transparent 70%);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  color: #fff;

  width: 50%;
  height: 100%;
  font-weight: 700;

  @media (min-width: 300px) {
    width: 100%;
  }

  @media (min-width: 900px) {
    width: 50%;
  }
`;

export const Header = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 16px;

  .title {
    display: block;
    font-size: 64px;
    margin-bottom: 16px;
  }

  .votes {
    color: var(--color-secondary);
  }

  span {
    margin-right: 16px;
  }

  @media (max-width: 600px) {
    font-size: 16px;

    .title {
      font-size: 40px;
    }
  }
`;

export const Description = styled.div`
  font-size: 18px;
  margin-bottom: 16px;

  overflow: hidden;

  @media (max-width: 600px) {
    font-size: 14px;
    max-height: 110px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  margin-bottom: 16px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 16px;
    padding: 12px 16px;

    color: var(--color-dark);
    text-decoration: none;
    border-radius: 6px;
    background-color: #fff;

    transition: background-color 0.2s ease-in;

    &:last-child {
      color: #fff;
      background-color: var(--color-dark-light);

      &:hover {
        background-color: #5c5c5c;
      }
    }

    &:hover {
      background-color: var(--color-light-dark);
    }
  }
`;

export const Genres = styled.div`
  span {
    margin-right: 12px;
  }
`;
