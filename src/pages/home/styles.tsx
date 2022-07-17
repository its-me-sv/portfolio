import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const MyImage = styled.img.attrs({
  alt: "Suraj Vijay"
})<{mobile: boolean}>`
  ${props => !props.mobile && `
    width: 24vw;
    height: auto;
    position: absolute;
    bottom: 0;
    left: 0;
  `}
`;

export const TitleText = styled.span`
  font-family: fredoka-one;
  font-weight: bold;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-image: linear-gradient(
    135deg,
    #0e73cc 1.93%,
    #624bbb 14.86%,
    #ff455d 48.09%,
    #f35815 77.82%,
    #f2b600 97.3%
  );
  font-size: 2.4rem;
`;

export const BodyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const BodyTitleText = styled.span`
  font-family: geomanist;
  font-size: 1.8rem;
  color: #1a1a1a;
`;

export const SubBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.36rem;
`;

export const SubHeading = styled.span`
  font-family: roboto;
  font-size: 1.4rem;
  color: #1a1a1a;
`;

export const Content = styled.span`
  font-family: geomanist;
  font-size: 1.3rem;
  color: rgba(0, 0, 0, 0.8);
`;
