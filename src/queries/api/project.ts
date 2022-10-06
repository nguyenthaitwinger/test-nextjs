import { params, SignInPropType } from "../../models/auth";

import { request } from "./config";

export const getListProject = () => {
  return request({
    url: "/v1/investment/list",
    method: "GET",
    params: { perPage: 6 },
  });
};
