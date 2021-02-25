import { patch, post } from '../../service/apiClient';
import { URL_PATHS } from '../../constants';

/**
 * @desc Declaración Jurada
 */
export const saveDDJJ = async data => patch(`${URL_PATHS.clients}`, { data });

/**
 * @desc Occupation
 */
export const saveOccupation = async data =>
  patch(`${URL_PATHS.clients}`, { data });

/**
 * @desc KYC
 */
export const fetchKycResults = async data => post(`${URL_PATHS.kyc}`, { data });

export const checkDocument = async data =>
  post(`${URL_PATHS.checkDocument}`, { data });
