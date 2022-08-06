import createHttp from './BaseService';

const http = createHttp(true);

export const createContact = (data) => http.post('/', data)
