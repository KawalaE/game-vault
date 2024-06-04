import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Trailer } from "../entities/Trailer";

const useTrailer = (id: number) => {
  const newAPIClient = new APIClient<Trailer>(`/games/${id}/movies`);
  return useQuery({
    //any time slug changes, fetch another game
    queryKey: ["trailers", id],
    queryFn: newAPIClient.getAll,
  });
};
export default useTrailer;
