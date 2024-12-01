import axios from "axios";
import { IGetData } from "../queries/queryTypes";
import { IPostData } from "./mutationsType";
import { useMutation } from "@tanstack/react-query";

const postProduct = async (data: IPostData): Promise<IGetData> => {
  const response = await axios.post<IGetData>(
    "https://fakestoreapi.com/products",
    data
  );
  return response.data;
};

export const usePostProduct = () => {
  return useMutation({
    mutationFn: postProduct,
    onSuccess(data) {
      console.log("dataget", data);
    },
  });
};
