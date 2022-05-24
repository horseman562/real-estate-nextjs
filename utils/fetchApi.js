import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';



export const fetchApi = async (url) => {
 
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key': 'a7a0e074e2msh2f69104a9380d7cp137767jsn43cbbc1ca228'
    },
  });
  
  return data;
}
 
