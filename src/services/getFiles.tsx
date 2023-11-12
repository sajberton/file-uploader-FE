import http from "../lib/http/axios";

export const getFiles = async (url: string, jsonData?: any): Promise<any> => {
  debugger;
  return await http.get(url, jsonData);
};
