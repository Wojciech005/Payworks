"use client";

import { LiaFileInvoiceSolid } from "react-icons/lia";
import PROJECT_DATA from "@/PROJECT_DATA";
import { useState } from "react";
import InvoiceTypeNavigation from "@/app/layout/invoice-type-navigation";

export default function ExcludedInvoices() {
  const data = PROJECT_DATA[0].pay_run.invoices;
  const pendingInvoices = data.filter(invoice => invoice.excluded === true);

  const [invoices, setInvoices] = useState(pendingInvoices);


  function onDeleteInvoice(invoice_number) {
    const updatedInvoices = invoices.filter((invoice) => invoice.invoice_number !== invoice_number);
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
    <InvoiceTypeNavigation />
      <div className="flex min-h-screen flex-col py-12 px-5 lg:px-12">
        <h1 className="text-2xl flex items-center mb-3 font-light">
          <LiaFileInvoiceSolid className="text-emerald-800 text-3xl me-1 font-light" />
          Excluded Invoices
        </h1>
        <div className="flex">
          <h1 className="flex items-center me-4">
            Invoices amount: {invoices.length}
          </h1>
        </div>
        {invoices.length === 0 ?  <h1 className="text-3xl text-center mt-6">There are no invoices</h1> : 
        <div>
         <div className="w-full bg-white p-3 mt-6 table-wrap">
         <table className="table-auto w-full">
         <thead className="">
           <tr>
             <th className="text-left pb-3"></th>
             <th className="text-left pb-3">Invoice Number</th>
             <th className="text-left pb-3">Posted Date</th>
             <th className="text-left pb-3">Supplier</th>
             <th className="text-left pb-3">Amount</th>
             <th className="text-left pb-3">Due date</th>
             <th className="text-left pb-3">Status</th>
             <th className="text-right pb-3 flex">Action</th>
           </tr>
         </thead>
         {invoices.map((invoice) => (
           <tbody className="border-t" key={invoice.invoice_number}>
             <td className="py-2"><input type="checkbox" className="w-4 h-4" checked={invoice.status === "pending" && true} /></td>
             <td className="py-2 font-light">{invoice.invoice_number}</td>
             <td className="py-2 font-light">{invoice.posted_date}</td>
             <td className="py-2 font-light">{invoice.supplier}</td>
             <td className="py-2 font-light">{invoice.amount}{invoice.currency}</td>
             <td className="py-2 font-light">{invoice.due_date}</td>
             <td className='text-left font-light'><p className={`${invoice.status !== "excluded" && 'text-white w-max px-2 bg-emerald-700 rounded'}`}>{invoice.status}</p></td>
             <td className="text-right flex py-4">
                 <button className=" bg-emerald-700 font-light text-white py-1 px-2 rounded me-3" onClick={() => updateItemValue(invoice.invoice_number, 'pending')}>Accept</button>
                 <button className="  bg-red-700 font-light text-white py-1 px-2 rounded me-3" onClick={() => onDeleteInvoice(invoice.invoice_number)}>Dispute</button>
             </td>
           </tbody>
         ))}
       </table>
         </div>
         <div className="flex justify-end mt-5 p-6 bg-white">
         <button className="bg-blue-500 text-white p-2 rounded" onClick={() => alert('Invoices transfered to "Pending"!')}>
             Transfer 
           </button>
         </div>
         </div>
        }
      </div>
    </>
  );
}