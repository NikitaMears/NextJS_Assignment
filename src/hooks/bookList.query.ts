import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_BASE_URL, BOOKS_ENDPOINT } from "../utils/constants";
export const useGetBookListQuery = (pageNumber: number) =>
  useQuery({
    queryKey: ["BookLists", pageNumber],
    queryFn: async () => {
      const  {data}  = await axios.get(`https://frontassignment.hyperhire.in/?page=1`);
      return data;
    },
    // enabled:!!pageNumber
  });