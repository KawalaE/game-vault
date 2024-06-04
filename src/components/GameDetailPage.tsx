import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "./ExpandableText";
import GameAttributes from "./GameAttributes";
import DefinitionItem from "./DefinitionItem";
import CriticScore from "./CriticScore";
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
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game}></GameAttributes>
      <GameTrailer id={game.id}></GameTrailer>
      <GameScreenshots id={game.id} />
    </>
  );
};

export default GameDetailPage;
