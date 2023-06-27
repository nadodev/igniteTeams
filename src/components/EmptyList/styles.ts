import styled from 'styled-components/native';

export const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const MessageEmpty = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_450};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO_REGULAR};
`;
