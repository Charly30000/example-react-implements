import axios from 'axios';
import { base_url } from './base_url.json';
import { People, Character } from './interfaces/people.interface';

const baseUrl: string = base_url;
const url = baseUrl + 'people';

export const getAllPeople = async (): Promise<People> => {
  const data = await axios.get<People>(url);
  return data.data;
}

export const sendCharacter = async(characters: Character[]) => {
  const data = await axios.post(url, characters);
  return data.data;
}

export const updateCharacter = async(characters: Character[]) => {
  const data = await axios.put(url, characters);
  return data.data;
}

export const deleteAllPeople = async() => {
  const data = await axios.delete(url);
  return data.data;
}
