import styled from 'styled-components';

export const ContactContainer = styled.div`
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const RowContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const ImageContainer = styled.div`
  width: 28px;
  height: 28px;
  margin-left: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.div`
  margin-left: 20px;
  text-align: start;
  color: darkslategrey;
`;