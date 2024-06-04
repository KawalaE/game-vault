import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, SimpleGrid, Spinner, GridItem } from "@chakra-ui/react";
import ExpandableText from "./ExpandableText";
import GameAttributes from "./GameAttributes";
import GameTrailer from "./GameTrailer";
import GameScreenshots from "./GameScreenshots";
const GameDetailPage = () => {
  const { slug } = useParams();

  //(slug || '') or ! - which tells TS that this constant will never
  //be null
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game}></GameAttributes>
      </GridItem>
      <GridItem>
        <GameTrailer id={game.id}></GameTrailer>
        <GameScreenshots id={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
