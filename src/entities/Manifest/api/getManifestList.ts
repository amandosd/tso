import axios from 'axios';
import { IManifestResponse } from '../types';

export const getManifestList = () => {
  return axios.get<IManifestResponse>(`/api/mainfest/list`);
};
