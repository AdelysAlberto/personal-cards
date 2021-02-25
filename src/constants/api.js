import { API_URL } from '../config';

/**
 * @desc Constants
 */

export const URL_PATHS = {
  logoBaseUrl: `${API_URL}/payments-service`,
};

export const TRANSACTION_STATES = {
  approved: 'Aprobada',
  denied: 'Rechazada',
  pending: 'Pendiente de aprobación',
  sameTransaction: 'Misma operación',
};
