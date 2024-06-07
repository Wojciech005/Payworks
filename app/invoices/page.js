"use client";

import { LiaFileInvoiceSolid } from "react-icons/lia";
import PROJECT_DATA from "@/PROJECT_DATA";
import { useState } from "react";
import InvoiceTypeNavigation from "../layout/invoice-type-navigation";

export default function Invoices() {
  const data = PROJECT_DATA[0].pay_run.invoices;
  const [invoices, setInvoices] = useState(data);

//   function onDeleteInvoice(invoice_number) {
//     console.log('delete click working', invoice_number);
//     const updatedInvoices = invoices.filter((invoice) => invoice.invoice_number !== invoice_number);
//     // setInvoices(invoices.filter((invoice) => invoice.invoice_number !== invoice_number))
//     setInvoices(updatedInvoices);
// }




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
          <LiaFileInvoiceSolid className="text-emerald-800 text-3xl me-1" />
          All Invoices
        </h1>
        <div className="flex">
          <h1 className="flex items-center me-4">
            Invoices amount: {invoices.length}
          </h1>
          {/* <h1 className="flex items-center">Amount to pay: {invoices.length * invoices.amount}</h1> */}
        </div>
        {invoices.length === 0 ?  <h1 className="text-3xl text-center">There are no invoices</h1> : 
         <div className="w-full bg-white p-3 mt-6 overflow-auto">
         <table className="table-auto w-full">
         <thead className="">
           <tr>
             {/* <th className="text-left pb-3"></th> */}
             {/* <th className="text-left pb-3">Status update</th> */}
             <th className="text-left pb-3">Invoice Number</th>
             <th className="text-left pb-3">Posted Date</th>
             <th className="text-left pb-3">Supplier</th>
             <th className="text-left pb-3">Amount</th>
             <th className="text-left pb-3">Due date</th>
             <th className="text-left pb-3">Status</th>
             {/* <th className="text-right pb-3">Action</th> */}
           </tr>
         </thead>
         {invoices.map((invoice) => (
           <tbody className="border-t" key={invoice.invoice_number}>
             {/* <td className="py-2"><input type="checkbox" className="w-4 h-4"/></td> */}
             {/* <td><div className={`pb-2 w-5 h-5 ${invoiceAccepted ? "bg-green-600" : ''}`}></div></td> */}
             <td className="py-2 font-light">{invoice.invoice_number}</td>
             <td className="py-2 font-light">{invoice.posted_date}</td>
             <td className="py-2 font-light">{invoice.supplier}</td>
             <td className="py-2 font-light">{invoice.amount}{invoice.currency}</td>
             <td className="py-2 font-light">{invoice.due_date}</td>
             <td className='py-2 font-light'>{invoice.status}</td>
             {/* <td className='text-center'><p className={`${invoice.status !== "pending" && 'text-white bg-emerald-700 rounded'}`}>{invoice.status}</p></td> */}
             {/* <td className="text-right"> */}
                 {/* <button className=" bg-emerald-700 text-white py-1 px-2 rounded me-3" onClick={() => updateItemValue(invoice.invoice_number, 'accepted')}>Accept</button> */}
                 {/* <button className="  bg-amber-400 text-white my-2  py-1 px-2 rounded mx-4" onClick={() => updateItemValue(invoice.invoice_number, 'pending')}>Exclude</button> */}
                 {/* <button className="bg-red-700/85 text-white  py-1 px-2 rounded" onClick={() => onDeleteInvoice(invoice.invoice_number)}>Exclude</button> */}
                 {/* <button className="bg-amber-400 text-white  py-1 px-2 rounded" onClick={() => onDeleteInvoice(invoice.invoice_number)}>Exclude</button> */}
             {/* </td> */}
           </tbody>
         ))}
       </table>
           {/* <div className="flex justify-end mt-5 border-t pt-6">
             <button className="bg-blue-500 text-white p-2 rounded">
               Make the payment
             </button>
           </div> */}
         </div>
        }
       
       
        {/* <div className="flex justify-end mt-5">
            <button className="bg-blue-500 text-white p-2 rounded">Make the payment</button>
        </div> */}
      </div>
    </>
  );
}
