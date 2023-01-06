import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container } from './styled';

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight 
        title="Turmas"
        subtitle="jogue com a sua turma"
      />
    </Container>
  );
}