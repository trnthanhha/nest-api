import { IPaginationOptions } from './types/pagination-options';

export const infinityPagination = <T>(
  data: T[],
  options: IPaginationOptions,
) => {
  return {
    data,
    meta: {
      ...options,
    },
    hasNextPage: data.length === options.limit,
  };
};

export class InfinityPagination<T> {
  private data: T[];
  private meta: IPaginationOptions;
  constructor(data: T[], meta: IPaginationOptions) {
    (this.data = data), (this.meta = meta);
  }
}
