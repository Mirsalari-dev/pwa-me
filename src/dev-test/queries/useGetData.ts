import { IMetaOptions } from "@/interfaces/services.types";
import apiClient from "@/utils/services/api";
import { useQuery } from "@tanstack/react-query";
import { IGetData } from "./queryTypes";

// API function
export const getBalance = async (): Promise<IGetData> => {
  const response = await apiClient.get<IGetData>("/User/GetCaptcha");
  return response.data;
};

// Hook
export const useGetBalance = (meta?: IMetaOptions<IGetData>) => {
  return useQuery({
    queryKey: ["get_balance"],
    queryFn: getBalance,
    ...meta,
  });
};
