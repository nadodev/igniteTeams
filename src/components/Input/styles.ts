import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  color           : ${({ theme }) => theme.COLORS.WHITE};
  font-family     : ${({ theme }) => theme.FONT_FAMILY.ROBOTO_REGULAR};
  font-size       : ${({ theme }) => theme.FONT_SIZE.MD}px;

  border-radius: 0.375rem;
  padding: 1rem;

  margin-bottom: 1.25rem;
`;
