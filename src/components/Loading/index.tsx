import { Container, LoadContainer, Title } from './style';

export default function Loading() {
  return (
    <Container>
    <LoadContainer color="red" size={50}/>
    <Title>Loading</Title>
  </Container>
  );
} 