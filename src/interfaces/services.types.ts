import { ReactQuerySideEffect } from "@/components/providers/reactQueryProvider/reactQueryProvider.types";

export interface IMetaOptions<T> {
  meta: Partial<ReactQuerySideEffect<T>>;
}
