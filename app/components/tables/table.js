'use client'

import PROJECT_DATA from "@/PROJECT_DATA";
import { useState } from "react";

export default function Table({status, invoice_number, posted_date, supplier, amount, currency, due_date}) {
    const data = PROJECT_DATA[0].pay_run.invoices;
    const [invoices, setInvoices] = useState(data);
    const [invoiceAccepted, setInvoiceAccepted] = useState(false)
    const [key, setKey] = useState(null);

    function onDeleteInvoice(invoice_number) {
        console.log('delete click working', invoice_number);
        const updatedInvoices = invoices.filter((invoice) => invoice.invoice_number !== invoice_number);
        // setInvoices(invoices.filter((invoice) => invoice.invoice_number !== invoice_number))
        setInvoices(updatedInvoices);
    }



  const updateItemValue = (invoice_number, updatedValue) => {
    const updatedItems = invoices.map(invoice => {
      if (invoice.invoice_number === invoice_number) {
        return { ...invoice, status: updatedValue };
      }
      return invoice;
    });

    setInvoices(updatedItems);
  };



  return (
    <>
      <table className="table-auto w-full">
        <thead className="">
          <tr>
            <th className="text-left pb-3"></th>
            {/* <th className="text-left pb-3">Status update</th> */}
            <th className="text-left pb-3">Invoice Number</th>
            <th className="text-left pb-3">Posted Date</th>
            <th className="text-left pb-3">Supplier</th>
            <th className="text-left pb-3">Amount</th>
            <th className="text-left pb-3">Due date</th>
            <th className="text-center pb-3">Status</th>
            <th className="text-right pb-3">Action</th>
          </tr>
        </thead>
        {invoices.map((invoice) => (
          <tbody className="border-t">
            <td className="py-2"><input type="checkbox" className="w-4 h-4" checked={status !== "pending" && true} /></td>
            {/* <td><div className={`pb-2 w-5 h-5 ${invoiceAccepted ? "bg-green-600" : ''}`}></div></td> */}
            <td className="py-2">{invoice_number}</td>
            <td className="py-2">{posted_date}</td>
            <td className="py-2">{supplier}</td>
            <td className="py-2">{amount}{currency}</td>
            <td className="py-2">{due_date}</td>
            <td className='text-center'><p className={`${status !== "pending" && 'text-white bg-emerald-700 rounded'}`}>{status}</p></td>
            <td className="text-right">
                {/* <button className=" bg-emerald-700 text-white py-1 px-2 rounded me-3" onClick={() => updateItemValue(invoice.invoice_number, 'accepted')}>Accept</button> */}
                {/* <button className="  bg-amber-400 text-white my-2  py-1 px-2 rounded mx-4" onClick={() => updateItemValue(invoice.invoice_number, 'pending')}>Exclude</button> */}
                {/* <button className="bg-red-700/85 text-white  py-1 px-2 rounded" onClick={() => onDeleteInvoice(invoice.invoice_number)}>Exclude</button> */}
                {/* <button className="bg-amber-400 text-white  py-1 px-2 rounded" onClick={() => onDeleteInvoice(invoice.invoice_number)}>Exclude</button> */}
            </td>
          </tbody>
        ))}
      </table>
    </>
  );
}




//   function acceptHandler(invoice_number) {
//     const acceptedInvoice = invoices.findIndex((invoice) => invoice.invoice_number == invoice_number);
//     // console.log(acceptedInvoice)
//     // setInvoiceAccepted(true)
    
//     console.log(invoiceAccepted)
//   }