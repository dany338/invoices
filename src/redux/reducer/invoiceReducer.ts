import { IInvoice } from '../../entities/Invoice';
import { INVOICE_GET_ALL, INVOICE_GET_ONE, INVOICE_CREATE, INVOICE_UPDATE } from '../types/invoice';

interface IActionProps {
  type: string;
  payload: any | unknown;
}

interface IInitialState {
  invoices: IInvoice[] | [];
  invoice: IInvoice | null;
}

const initialState: IInitialState = {
  invoices: [],
  invoice: null,
};

export const invoiceReducer = (state = initialState, action: IActionProps) => {
  switch (action.type) {
    case INVOICE_GET_ALL:
      return {
        ...state,
        invoices: action.payload,
      };
    case INVOICE_GET_ONE:
      return {
        ...state,
        invoice: action.payload,
      };
    case INVOICE_CREATE:
      return {
        ...state,
        invoice: action.payload,
        invoices: [...state.invoices, action.payload],
      };
    case INVOICE_UPDATE:
      return {
        ...state,
        invoice: action.payload,
        invoices: state.invoices.map((invoice) => (invoice.id === action.payload.id ? action.payload : invoice)),
      };
    default:
      return state;
  }
}