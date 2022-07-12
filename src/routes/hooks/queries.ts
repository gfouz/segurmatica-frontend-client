import { useQuery } from "react-query";
import { getToken } from "../asyncfunctions/asyncFunctions";
type URL = string;
const key: string = "auth";
interface IParams {
  user?: string;
  password?: string;
}

export function useGetToken(url: URL, params: IParams) {
  return useQuery([key], () => getToken(url, params));
}
