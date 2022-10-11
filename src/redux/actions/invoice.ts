import { IInvoice, IInvoiceCreateUpdate } from '../../entities/Invoice';
import { getInvoicesService, getInvoiceService, createInvoiceService, updateInvoiceService } from '../../services/invoice';
import { INVOICE_GET_ALL, INVOICE_GET_ONE, INVOICE_CREATE, INVOICE_UPDATE } from '../types/invoice';

export const getInvoicesAction = () => async (dispatch: any) => {
  try {
    const response: IInvoice[] | [] = await getInvoicesService();
    dispatch({
      type: INVOICE_GET_ALL,
      payload: response,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getInvoiceAction = (id: number) => async (dispatch: any) => {
  try {
    const response: IInvoice | null = await getInvoiceService(id);
    dispatch({
      type: INVOICE_GET_ONE,
      payload: response,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createInvoiceAction = (data: IInvoiceCreateUpdate) => async (dispatch: any) => {
  try {
    const response: IInvoice | null = await createInvoiceService(data);
    dispatch({
      type: INVOICE_CREATE,
      payload: response,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateInvoiceAction = (id: number, data: IInvoiceCreateUpdate) => async (dispatch: any) => {
  try {
    const response: IInvoice | null = await updateInvoiceService(id, data);
    dispatch({
      type: INVOICE_UPDATE,
      payload: response,
    });
  } catch (err) {
    console.log(err);
  }
};