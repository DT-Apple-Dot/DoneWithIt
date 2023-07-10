import { create } from "apisauce";
import cashe from '../utility/cache';
import authStorage from '../auth/storage'

const apiClient = create({
  baseURL: "http://192.168.99.87:9000/api",
});

apiClient.addAsyncRequestTransform(async(request) => {
  const authToken = await authStorage.getToken();
  if(!authToken) return;
  request.headers["x-auth-token"] = authToken;
})

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig)

  if(response.ok) {
    cashe.store(url, response.data)
    return response;
  }

  const data = await cashe.get(url)
  return data ? { ok: true, data } : response
}

export default apiClient;