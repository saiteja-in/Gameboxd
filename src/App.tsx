import React from "react";
import { Button, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid templateAreas={{
      base:`"nav " " main"`,
      lg:`"nav nav" "side main"`
    }}>
      <GridItem area={"nav"} bg="red">
        Nav
      </GridItem>
      <Show above='lg'>
      <GridItem area={"side"} bg="yellow">
        side
      </GridItem>
      </Show>
      <GridItem area={"main"} bg="green">
        main
      </GridItem>
    </Grid>
  );
};

export default App;
