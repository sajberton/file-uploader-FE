import http from "../lib/http/axios";

export const createFile = async (url: string, jsonData?: any): Promise<any> => {
  debugger;
  return await http.post(url, jsonData);
};

export const getPagedFiles = async (
  url: string,
  jsonData?: any
): Promise<any> => {
  debugger;
  return await http.post(url, jsonData);
};
