export interface CommonResponse<T> {
  isSuccess: boolean;
  code: string;
  message: string;
  result: T | null;
}
