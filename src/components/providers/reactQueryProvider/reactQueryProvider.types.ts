import { Query } from "@tanstack/react-query";

export type APIError = {
  status_code: number;
  message: string;
  is_success: boolean;
  response: null;
  error: {
    type: string | null;
    code: string | null;
    detail: string | null;
    attr: string | null;
    fa_attr: string | null;
    fa_details: string | null;
  };
};

export type QueryObjectErrorType = {
  show: true;
  duration: number;
};
export type QueryObjectSuccessType = {
  message: string;
  duration: number;
};
export type ReactQuerySideEffect<TData = any> = {
  onError?: (error: APIError, query: Query<unknown, unknown, unknown>) => void;
  onSuccess?: (data: TData, query: Query<unknown, unknown, unknown>) => void;
  onSettled?: (
    data: TData | undefined,
    error: APIError | null,
    query: Query<unknown, unknown, unknown>
  ) => void;
};

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: APIError;
    mutationMeta: {
      error?: QueryObjectErrorType | false;
      successToast?: QueryObjectSuccessType | string;
    };
    queryMeta: ReactQuerySideEffect;
  }
}
