import  { useEffect, useState } from 'react'

import useGames from '../Hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';


const GameGrid = () => {
    const skeletons=[1,2,3,4,5,6]
    const{games,error,isLoading}=useGames()
    return (
        <>
       {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} padding={'10px'} spacing={10}>
            {isLoading && skeletons.map((skeleton)=><GameCardSkeleton key={skeleton} />)}
            {games.map((game)=>(
                <GameCard key={game.id} game={game}/>
            ))}
        </SimpleGrid>
        </>
      )
  
}

export default GameGrid

