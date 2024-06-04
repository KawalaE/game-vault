import { useQuery } from "@tanstack/react-query";
import { Screenshot } from "../entities/Screenshot";
import APIClient from "../services/api-client";

const useScreenshots = (id: number) => {
  const newAPIClient = new APIClient<Screenshot>(`/games/${id}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", id],
    queryFn: newAPIClient.getAll,
  });
};
export default useScreenshots;
