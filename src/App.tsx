import React, { useState } from "react";
import { Button, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./Hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

const App = () => {
  const[selectedGenre,setSelectedGenre]=useState<Genre | null>(null)
  return (
    <Grid templateAreas={{
      base:`"nav " " main"`,
      lg:`"nav nav" "side main"`
    }}
    templateColumns={{
      base:'1fr',
      lg:'200px 1fr'
    }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above='lg'>
      <GridItem area={"side"} paddingX={5} >
        <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre)=>setSelectedGenre(genre)} />
      </GridItem>
      </Show>
      <GridItem area={"main"} >
        <PlatformSelector />
      <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
};

export default App;
