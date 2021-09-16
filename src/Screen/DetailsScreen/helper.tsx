import { ResponseDetailsAirport } from '@redux/api/type';

export const createArrayLinks = (urls: ResponseDetailsAirport['urls']) =>  {

  const arrayUrls: Map<string[],string> = new Map();
  for (const [key, value] of Object.entries(urls)) {
    const result = key.match(/[A-Z]/);
    if (result != null && result.index != undefined) {
      arrayUrls.set([
        `${key[0].toUpperCase()}${key.substring(1, result.index)} ${key.substring(result.index)}`
      ], value);
    } else {
      arrayUrls.set([key[0].toUpperCase() + key.slice(1)],  value);
    }
  }
  return arrayUrls;
}
