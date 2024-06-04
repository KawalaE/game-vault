import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "../entities/Game";

const newAPIClient = new APIClient<Game>("/games");

const useGame = (slug: string) => {
  return useQuery({
    //any time slug changes, fetch another game
    queryKey: ["games", slug],
    queryFn: () => newAPIClient.get(slug),
  });
};
export default useGame;
