import { useInfiniteQuery, useQuery } from "react-query";
import { params } from "../../models/auth";
import { getListProject } from "../api/project";
import { PROJECT } from "../keys";

export const QueryProjet = (params?: params) => {
  return useQuery([PROJECT, { ...params }], () => getListProject(params));
};

// export const QueryPagination = (params?: params) => {
//   return useInfiniteQuery(
//     PROJECT,
//     () => {
//       getListProject(params);
//     },
//     {
//       getNextPageParam: (lastPage, allPages) => lastPage,
//       getPreviousPageParam: (firstPage, allPages) => firstPage,
//     }
//   );
// };

// export const QueryFilterProject = () => {
//   const queryClient = useQueryClient();
//   return useInfiniteQuery(getListProject, {
//     onSuccess: (data: ResApi) => {
//       if (data.statusCode === 200) {
//         logger.debug("Succes", data);
//         queryClient.invalidateQueries(PROJECT);
//       } else {
//         queryClient.setQueryData(PROJECT, null);
//       }
//     },
//     onError: (error: ResApiErr) => {
//       logger.error("🚀 ~ querySignIn ~ error", error);
//       notification.error({ message: error.message });
//     },
//     onSettled: (data, error, variables, context) => {
//       logger.debug("onSettled", data, error, variables, context);
//       queryClient.setQueryData(PROJECT, null);
//     },
//   });
// };
