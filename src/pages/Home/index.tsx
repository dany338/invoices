import { FC } from 'react';
import { Container } from './styled';

export interface IHomeProps {}

const Home: FC<IHomeProps> = ({}) => {
  return (
    <Container>
      <h1>HOME</h1>
    </Container>
  );
}

export default Home;