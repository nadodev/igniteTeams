import { EmptyContainer, MessageEmpty } from './styles';

type Props = {
  EmptyMessage: string;
};

export default function EmptyList({ EmptyMessage }: Props) {
  return (
    <EmptyContainer>
      <MessageEmpty>{EmptyMessage}</MessageEmpty>
    </EmptyContainer>
  );
}
