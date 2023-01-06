import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { useState } from "react";
import { FlatList } from "react-native";
import { Container } from "./styled";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([
    "Galera da Rocket",
    "amigos",
  ]);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </Container>
  );
}
