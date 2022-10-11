export interface IClient {
  id: number;
  dni: string;
  firstName: string;
  lastName: string;
}

export interface ILines {
  id?: number | null;
  description: string;
  amount: number;
}

export interface IInvoice {
  id?: number | null;
  total?: number| null;
  clientId: number;
  date: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  updatedUser?: number| null;
  client: IClient;
  lines: ILines[];
}

export interface IInvoiceCreateUpdate {
  clientId: number;
  date: string;
  lines: ILines[];
}

class Invoice implements IInvoice {
  id?: number | null;
  total?: number| null;
  clientId: number;
  date: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  updatedUser?: number | null;
  client: IClient;
  lines: ILines[];

  constructor(invoice: IInvoice) {
    this.id = invoice.id;
    this.total = invoice.total;
    this.clientId = invoice.clientId;
    this.date = invoice.date;
    this.createdAt = invoice.createdAt;
    this.updatedAt = invoice.updatedAt;
    this.updatedUser = invoice.updatedUser;
    this.client = invoice.client;
    this.lines = invoice.lines;
  }
}

export default Invoice;