import api from './api';
import { API_INVOICE } from '../constants/backend';
import Invoice, { IInvoice, IInvoiceCreateUpdate } from '../entities/Invoice';

export const getInvoicesService = async (): Promise<IInvoice[] | []> => new Promise( async (resolve, reject) => {
  try {
    const response = await api.get(API_INVOICE);
    if (response.status === 200) {
      resolve(response.data.map((invoice: IInvoice) => new Invoice(invoice)));
    }
  } catch (err) {
    reject(err);
  }
});

export const getInvoiceService = async (id: number): Promise<IInvoice | null> => new Promise( async (resolve, reject) => {
  try {
    const response = await api.get(`${API_INVOICE}/${id}`);
    if (response.status === 200) {
      resolve(new Invoice(response.data));
    }
  } catch (err) {
    reject(err);
  }
});

export const createInvoiceService = async (data: IInvoiceCreateUpdate): Promise<IInvoice | null> => new Promise( async (resolve, reject) => {
  try {
    const response = await api.post(API_INVOICE, data);
    if (response.status === 201) {
      resolve(new Invoice(response.data));
    }
  } catch (err) {
    reject(err);
  }
});

export const updateInvoiceService = async (id: number, data: IInvoiceCreateUpdate): Promise<IInvoice | null> => new Promise( async (resolve, reject) => {
  try {
    const response = await api.patch(`${API_INVOICE}/${id}`, data);
    if (response.status === 200) {
      resolve(new Invoice(response.data));
    }
  } catch (err) {
    reject(err);
  }
});