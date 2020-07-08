import { AxiosRequestConfig } from "axios";
export default function useAuthFetch(url: string, config: AxiosRequestConfig, isEnv: boolean | undefined, env: string): [any[], Boolean, any];
