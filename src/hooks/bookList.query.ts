import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_BASE_URL } from "../utils/constants";
export const useGetBookListQuery = (pageNumber: number) =>
  useQuery({
    queryKey: ["BookLists", pageNumber],
    queryFn: async () => {
      const  {data}  = await axios.get(API_BASE_URL);
      return data;
    },

  });