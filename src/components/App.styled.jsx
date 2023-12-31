import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  font-size: 30px;
`;

export const Block = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 15px;
  margin-top: 25px;
`;

export const Message = styled.p`
  color: red;
`;
