import Button from '@components/Button';
import EmptyList from '@components/EmptyList';
import GroupCard from '@components/GroupCard';
import Header from '@components/Header';
import Highlight from '@components/Highlight';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([
    'Turma 1',
    'Turma 2',
  ]);
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com sua Turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <EmptyList EmptyMessage="Não existe grupo cadastrado no momento" />
        )}
      />
      <Button title="Criar Nova Turma" />
    </Container>
  );
}
