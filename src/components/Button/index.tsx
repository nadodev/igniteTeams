import { TouchableOpacityProps } from 'react-native';
import {
  ButtonContainer,
  ButtonTypeStyleProps,
  TitleButton,
} from './styles';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

export default function Button({
  title,
  type = 'PRIMARY',
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer type={type} {...rest}>
      <TitleButton>{title}</TitleButton>
    </ButtonContainer>
  );
}
