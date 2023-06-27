import Button from '@components/Button';
import Header from '@components/Header';
import Highlight from '@components/Highlight';
import { Input } from '@components/Input';
import { Container, Content, Icon } from './styles';

export default function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova Turma"
          subtitle="Crie uma nova turma para começar a usar o aplicativo"
        />
        <Input />
        <Button title="Criar Turma" />
      </Content>
    </Container>
  );
}
