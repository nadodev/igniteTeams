import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 35px 20px;
  flex: 1;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 25px;
`;
