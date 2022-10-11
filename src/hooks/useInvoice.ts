import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useEffectOnce from './useEffectOnce';
import { getInvoicesAction, getInvoiceAction, createInvoiceAction, updateInvoiceAction } from '../redux/actions/invoice';
import { IInvoiceCreateUpdate } from '../entities/Invoice';

const useInvoice = () => {
  const [ loading, setLoading ] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { invoice: { invoices, invoice } }: any = useSelector((state) => state);

  const fecthInvoices = async () => {
    setLoading(true);
    await dispatch<any | unknown>(getInvoicesAction());
    setLoading(false);
  };

  const fecthInvoice = async (id: number) => {
    setLoading(true);
    await dispatch<any | unknown>(getInvoiceAction(id));
    setLoading(false);
  };

  const fecthCreateInvoice = async (data: IInvoiceCreateUpdate) => {
    setLoading(true);
    await dispatch<any | unknown>(createInvoiceAction(data));
    setLoading(false);
  };

  const fecthUpdateInvoice = async (id: number, data: IInvoiceCreateUpdate) => {
    setLoading(true);
    await dispatch<any | unknown>(updateInvoiceAction(id, data));
    setLoading(false);
  };

  useEffectOnce(() => {
    fecthInvoices();
    return () => console.log('unmounting...');
  });

  return { loading, invoices, invoice, fecthInvoice, fecthCreateInvoice, fecthUpdateInvoice };
}

export default useInvoice;