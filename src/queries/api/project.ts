import { params, SignInPropType } from "../../models/auth";

import { request } from "./config";

export const getListProject = (params?: params) => {
  return request({
    url: "/v1/investment/list",
    method: "GET",
    params: { ...params, perPage: 6 },
  });
};

export const getProjectById = (id: string) => {
  return request({
    url: `/v1/investment/${id}`,
    method: "GET",
  });
};
