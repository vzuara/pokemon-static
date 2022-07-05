import { Container, Row, Text } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

export const NoFavorites = () => {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 100px)',
      }}
    >
      <Text h1>No hay favoritos</Text>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
        width={250}
        height={250}
        style={{
          marginTop: '30px',
          opacity: '0.1',
        }}
        alt=''
      />
    </Container>
  );
};
