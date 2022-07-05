import { Card, Grid, Row, Text } from '@nextui-org/react';
import { NextPage } from 'next';
import Router from 'next/router';
import { SmallPokemon } from '../../interfaces';

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: NextPage<Props> = ({ pokemon }) => {
  const { id, img, name } = pokemon;

  const onClick = () => {
    Router.push(`/name/${name}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
      <Card isHoverable isPressable onPress={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} width='100%' height={150} alt='name' />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize'>{name}</Text>
            <Text>{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
