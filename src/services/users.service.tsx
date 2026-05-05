import axios from "axios";

type LoginResponse = {
  token: string;
};

export async function loginService(data: any): Promise<LoginResponse> {
  const response = await axios.post("http://localhost:3000/login", data);
  return response.data;
}

export async function registerService(data: any) {
  const response = await axios.post("http://localhost:3000/register", data);
  return response.data;
}