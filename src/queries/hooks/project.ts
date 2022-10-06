import { useQuery } from "react-query";
import { getListProject } from "../api/project";
import { PROJECT } from "../keys";

export const QueryProjet = () => {
  return useQuery(PROJECT, () => getListProject());
};
