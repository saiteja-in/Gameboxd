import  { useEffect, useState } from 'react'

import useGames from '../Hooks/useGames';
import { Text } from '@chakra-ui/react';


const GameGrid = () => {
    
    const{games,error}=useGames()
    return (
        <>
       {error && <Text>{error}</Text>}
        <ol>
            {games.map(item=><li key={item.id}>{item.name}</li>)}
        </ol>
        </>
      )
  
}

export default GameGrid

