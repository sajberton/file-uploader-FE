import http from "../lib/http/axios";

export const getLastFileData = async (
  url: string,
  jsonData?: any
): Promise<any> => {
  return await http.get(url, jsonData);
};

export const getFileDataByFileId = async (
  url: string,
  id: any
): Promise<any> => {
  const request = { Id: id };
  return await http.get(url, { params: request });
};
