export type Props = {
  url: string;
  error: string;
  log: boolean;
  payload?: { [key: string]: string | number | boolean | null };
};
