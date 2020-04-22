import api from "../configs/Api";
import md5 from "js-md5";

const publicKey = "9a0d4b68cb70c78a274a281e5addc52b";
const privateKey = "aba8e6236d4000577e2f3c6cfe8d0492ca765c42";

const timeStamp = Number(new Date());
const hash = md5.create().update(timeStamp + privateKey + publicKey);

export const getHeroes = async ({ limit, name }) => {
  if (name) {
    const response = await api.get(
      `/characters?nameStartsWith=${name}&ts=${timeStamp}&orderBy=name&limit=${limit}&apikey=${publicKey}&hash=${hash.hex()}`
    );
    return response.data;
  } else {
    const response = await api.get(
      `/characters?ts=${timeStamp}&orderBy=name&limit=${limit}&apikey=${publicKey}&hash=${hash.hex()}`
    );
    return response.data;
  }
};

export const getHeroComics = async (heroId, limit) => {
  const response = await api.get(
    `/characters/${heroId}/comics?ts=${timeStamp}&orderBy=title&limit=${limit}&apikey=${publicKey}&hash=${hash.hex()}`
  );
  return response.data;
};
