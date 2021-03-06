import styled from "@emotion/styled";

export const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  color: #333333;
`;

export const HeadingSmall = styled.h2`
  font-family: 'Lato', sans-serif;
  font-size: 18px; 
  line-height: 24px;
  color: #333333;
`;

export const HeadingMedium = styled.h3`
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  line-height: 32px;
  color: #333333;

  @media (max-width: 768px) {
    font-size: 18px; 
    line-height: 24px;
  }
`;

export const Content = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
`;

export const ContentXLarge = styled(Content)`
  font-size: 20px;
  line-height: 32px;
`;

export const ContentLarge = styled(Content)`
  font-size: 18px;
  line-height: 24px;
`;

export const ContentRegular = styled(Content)`
  font-size: 16px;
  line-height: 24px;
`;

export const ContentSmall = styled(Content)`
  font-size: 14px;
  line-height: 24px;
`

export const ContentXSmall = styled(Content)`
  font-size: 12px;
  line-height: 18px;
`

export const Price = styled(ContentLarge)`
  color: #4bbd2e;
  font-weight: 600;
`;