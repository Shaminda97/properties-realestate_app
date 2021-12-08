import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '78d5cf8023msh9d2d5fda24033e4p1118a6jsnf2a438bedc01'
      },
  });
    
  return data;
}