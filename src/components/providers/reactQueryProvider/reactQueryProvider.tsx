"use client";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactNode } from "react";
import { ReactQuerySideEffect } from "./reactQueryProvider.types";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      (query.meta as ReactQuerySideEffect)?.onError?.(error, query);
    },
    onSuccess: (data, query) => {
      (query.meta as ReactQuerySideEffect)?.onSuccess?.(data, query);
    },
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (failureCount, error) =>
        error.status_code >= 500 && failureCount < 4,
    },
  },
});

const ReactQueryProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
export default ReactQueryProvider;
