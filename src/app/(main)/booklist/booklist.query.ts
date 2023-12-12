import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetBookListQuery = (pageNumber: number) =>
  useQuery({
    queryKey: ["BookLists", pageNumber],
    queryFn: async () => {
      const  {data}  = await axios.get(`https://frontassignment.hyperhire.in/?page=${pageNumber}`);
      return data;
    },
    // enabled:!!pageNumber
  });