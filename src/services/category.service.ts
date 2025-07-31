import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import { parseParameter } from "next/dist/shared/lib/router/utils/route-regex";

const categoryServices = {
  getCategories: (params?: string) =>
    instance.get(`${endpoint.CATEGORY}?${params}`),
};

export default categoryServices;
