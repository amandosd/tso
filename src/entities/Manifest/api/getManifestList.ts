import axios from 'axios';
import { IManifestResponse } from '../types';

export const getChannelById = () => {
  return axios.get<IManifestResponse>(`/api/channel-service/channel/get`);
};
