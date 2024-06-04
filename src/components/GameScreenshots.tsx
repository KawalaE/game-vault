import useScreenshots from "../hooks/useScreenshots";
import { SimpleGrid, Image } from "@chakra-ui/react";

interface Props {
  id: number;
}
const GameScreenshots = ({ id }: Props) => {
  const { data, isLoading, error } = useScreenshots(id);
  if (isLoading) return null;
  if (error) throw error;

  return data ? (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((element) => {
        return <Image key={element.id} src={element.image}></Image>;
      })}
    </SimpleGrid>
  ) : null;
};

export default GameScreenshots;
