import { get } from "lodash";
export const getToken = (path: string, fallback?: any) => {
  return (props: any) => get(props.theme, path, fallback);
};
