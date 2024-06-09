"use client";

import { LiaFileInvoiceSolid } from "react-icons/lia";
import PROJECT_DATA from "@/PROJECT_DATA";
import { useState } from "react";
import InvoiceTypeNavigation from "@/app/layout/invoice-type-navigation";
import TableCard from "@/app/components/UI/table-card";
import Button from "@/app/components/UI/button";
import Popup from "@/app/components/UI/popup";
import Link from "next/link";

export default function PendingInvoices() {
  const data = PROJECT_DATA[0].pay_run.invoices;
  const pendingInvoices = data.filter(invoice => invoice.excluded === false);


  const [invoices, setInvoices] = useState(pendingInvoices);
  const [submitPayment, setSubmitPayment] = useState(false);

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

function countAcceptedInvoices() {
  let acceptedCount = 0;
  invoices.forEach(invoice => {
    if (invoice.status === 'accepted') {
      acceptedCount++;
    }
  });
  return acceptedCount;
}
const acceptedInvoiceCount = countAcceptedInvoices();

function acceptedAmount() {
  let totalAmount = 0;
  invoices.forEach(invoice => {
    if (invoice.status === 'accepted') {
      totalAmount += invoice.amount;
    }
  });
  return totalAmount;
}

const totalAcceptedAmount = acceptedAmount();

function submitPaymentHandler(){
  setSubmitPayment(!submitPayment)
}


  return (
    <>
    <InvoiceTypeNavigation />
      <div className="flex min-h-screen flex-col py-8 md:py-12 px-5 lg:px-12">
        <h1 className="text-2xl flex items-center mb-3 font-light">
          <LiaFileInvoiceSolid className="text-emerald-800 text-3xl me-1" />
          Pending Invoices
        </h1>
        <div className="flex">
          <h1 className="flex items-center me-4">
          Invoices number: {invoices.length}
          </h1>
        </div>
        {invoices.length === 0 ?  <h1 className="text-3xl text-center font-light mt-6">There are no invoices</h1> : 
        <div>
          <TableCard>
         <table className="table-auto w-full">
         <thead className="">
           <tr>
             <th className="text-left pb-3"><input type="checkbox" className="w-4 h-4"/></th>
             <th className="text-left pb-3">Invoice Number</th>
             <th className="text-left pb-3">Posted Date</th>
             {/* <th className="text-left pb-3">Supplier Ref</th> */}
             <th className="text-left pb-3">Supplier</th>
             <th className="text-left pb-3">Amount</th>
             <th className="text-left pb-3">Due date</th>
             <th className="text-left pb-3">Status</th>
             <th className="pb-3 flex justify-end">Action</th>
           </tr>
         </thead>
         {invoices.map((invoice) => (
           <tbody className="border-t" key={invoice.invoice_number}>
             <td className="py-2"><input type="checkbox" className="w-4 h-4" checked={invoice.status !== "pending" && true}/></td>
             <td className="py-2 font-light">{invoice.invoice_number}</td>
             <td className="py-2 font-light">{invoice.posted_date}</td>
             {/* <td className="py-2 font-light">{invoice.supplier_reference}</td> */}
             <td className="py-2 font-light">{invoice.supplier}</td>
             <td className="py-2 font-light">{invoice.amount}{invoice.currency}</td>
             <td className="py-2 font-light">{invoice.due_date}</td>
             <td className='text-left font-light'><p className={`px-2 ${invoice.status !== "pending" && 'text-white w-max bg-emerald-600 rounded'}`}>{invoice.status}</p></td>
             <td className="text-right flex justify-end py-3">
                 <button className=" bg-emerald-600 text-white py-1 px-2 rounded font-light" onClick={() => updateItemValue(invoice.invoice_number, 'accepted')}>Accept</button>
                 <button className="bg-amber-500 text-white  py-1 px-2 rounded font-light mx-3" onClick={() => updateItemValue(invoice.invoice_number, 'pending')}>Pending</button>
                 <button className="bg-red-500 text-white  py-1 px-2 rounded font-light" onClick={() => onDeleteInvoice(invoice.invoice_number)}>Exclude</button>
             </td>
           </tbody>
         ))}
       </table>
       </TableCard>
         <div className="flex flex-wrap justify-between items-center mt-5 p-3 md:p-6 bg-white rounded shadow">
          <div className="flex flex-col md:flex-row items-start md:items-center my-1">
          <p className="sm:me-4 font-light text-start">Accepted Invoices: <span className="font-normal">{acceptedInvoiceCount}</span></p>
          <p className="sm:me-4 font-light text-start">Amount:  <span className="font-normal">£{totalAcceptedAmount}</span></p>
          <p className="sm:me-4 font-light text-start">Excluded Invoices: <span className="font-normal">{30 - invoices.length}</span></p>
          </div>
         {/* <Button>Make the payment</Button> */}
         <button className=" bg-emerald-600 my-1  text-white py-2 px-4 rounded font-medium w-full xs:w-auto  tracking-wider hover:bg-emerald-700 md:mt-0 h-fit" onClick={submitPaymentHandler}>
         Make the payment
         </button>
       </div>
       </div>
        }
       {submitPayment && <Popup popupHandler={submitPaymentHandler} acceptedAmount={totalAcceptedAmount} popupContent={totalAcceptedAmount === 0 ? 'There is nothing to accept.' : 'Can you confirm that you want to realize this payment?'} buttonName={totalAcceptedAmount === 0 ? 'Close' : 'Confirm'} />}
      </div>
    </>
  );
}
