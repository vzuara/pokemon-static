import { Grid, Card } from '@nextui-org/react';
import { NextPage } from 'next';
import Router from 'next/router';
interface Props {
  pokemonId: number;
}

export const FavoriteCardPokemon: NextPage<Props> = ({ pokemonId }) => {
  const onFavoriteClicked = () => {
    Router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card
        isHoverable
        isPressable
        onPress={onFavoriteClicked}
        style={{ padding: 10 }}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={'100%'}
          height={140}
        />
      </Card>
    </Grid>
  );
};
