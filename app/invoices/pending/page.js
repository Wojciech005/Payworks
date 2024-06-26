"use client";

import { useState } from "react";
import PROJECT_DATA from "@/PROJECT_DATA";
import InvoiceTypeNavigation from "@/app/layout/invoice-type-navigation";
import TableCard from "@/app/components/UI/table-card";
import Popup from "@/app/components/UI/popup";
import Heading from "@/app/components/UI/heading";
import SubHeading from "@/app/components/UI/sub-heading";
import  { acceptedAmount, currencyFormatter, countAcceptedInvoices } from "@/app/utility";

import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { LiaFileInvoiceSolid } from "react-icons/lia";



export default function PendingInvoices() {
  const data = PROJECT_DATA[0].pay_run.invoices;
  const pendingInvoices = data.filter(invoice => invoice.excluded === false);
  const [invoices, setInvoices] = useState(pendingInvoices);
  const [submitPayment, setSubmitPayment] = useState(false);
  const [isAscendingSupplier, setIsAscendingSupplier] = useState(true);
  const [isAscendingAmount, setIsAscendingAmount] = useState(true);
  const [isAscendingDueDate, setIsAscendingDueDate] = useState(true);
  const [isAscendingPostedDate, setIsAscendingPostedDate] = useState(true);
  const [searchSupplier, setSearchSupplier] = useState('');

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


const acceptedInvoiceCount = countAcceptedInvoices(invoices);
const totalAcceptedAmount = acceptedAmount(invoices);

function submitPaymentHandler(){
  setSubmitPayment(!submitPayment)
}

const sortTableBySupplier = () =>  {
  const sortedData = [...invoices].sort((a, b) => {
    if (isAscendingSupplier) {
      return a.supplier.localeCompare(b.supplier);
    } else {
      return b.supplier.localeCompare(a.supplier);
    }
  });
  setInvoices(sortedData);
  setIsAscendingSupplier(!isAscendingSupplier);
};

const sortTableByAmount = () => {
  const sortedData = [...invoices].sort((a, b) => {
    if (isAscendingAmount) {
      return a.amount - b.amount;
    } else {
      return b.amount - a.amount;
    }
  });
  setInvoices(sortedData);
  setIsAscendingAmount(!isAscendingAmount);
}

const sortTableByDueDate = () => {
  const sortedData = [...invoices].sort((a, b) => {
    const dateA = new Date(a.due_date);
    const dateB = new Date(b.due_date);
    
    if (isAscendingDueDate) {
      return dateB - dateA;
    } else {
      return dateA - dateB;
    }
  });
  setInvoices(sortedData);
  setIsAscendingDueDate(!isAscendingDueDate);
};


const sortTableByPostedDate = () => {
  const sortedData = [...invoices].sort((a, b) => {
    const dateA = new Date(a.due_date);
    const dateB = new Date(b.due_date);
    
    if (isAscendingPostedDate) {
      return dateB - dateA;
    } else {
      return dateA - dateB;
    }
  });
  setInvoices(sortedData);
  setIsAscendingPostedDate(!isAscendingPostedDate);
};

const handleSearch = (event) => {
  setSearchSupplier(event.target.value);
};

const filteredInvoices = invoices.filter((invoice) =>
  invoice.supplier.toLowerCase().includes(searchSupplier.toLowerCase())
);


  return (
    <>
    <InvoiceTypeNavigation />
      <div className="flex min-h-screen flex-col py-8 md:py-12 px-5 lg:px-12">
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center">
        <div className="flex flex-col">
        <Heading> 
          <LiaFileInvoiceSolid className="text-emerald-800 text-3xl me-1" />
          Pending Invoices
          </Heading>
          <SubHeading invoicesNumber={invoices.length}/>
          </div>
          <input
        type="text"
        placeholder="Search by Supplier"
        value={searchSupplier}
        onChange={handleSearch}
        className="p-3 shadow rounded w-full sm:w-[250px] min-w-60 outline-none mt-5 sm:mt-0"
      />
      </div>
        {invoices.length === 0 ?  <h1 className="text-3xl text-center font-light mt-6">There are no invoices</h1> : 
        <div>
          <TableCard>
         <table className="table-auto w-full">
         <thead className="">
           <tr>
             <th className="text-left pb-3"><input type="checkbox" className="w-4 h-4"/></th>
             <th className="text-left pb-3">Invoice Number</th>
             <th className="text-left pb-3">Posted Date <button className="align-text-top ms-2" onClick={sortTableByPostedDate}>{isAscendingPostedDate ? <FaArrowUp />
:  <FaArrowDown />}</button></th>
             <th className="text-left pb-3">Due date<button className="align-text-top ms-2" onClick={sortTableByDueDate}>{isAscendingDueDate ? <FaArrowUp />
:  <FaArrowDown />}</button></th>
             <th className="text-left pb-3">Supplier <button className="align-text-top ms-2" onClick={sortTableBySupplier}>{isAscendingSupplier ? <FaArrowUp />
:  <FaArrowDown />}</button></th>
             <th className="text-left pb-3">Amount <button className="align-text-top ms-2" onClick={sortTableByAmount}>{isAscendingAmount ? <FaArrowUp />
:  <FaArrowDown />}</button></th>
             <th className="text-left pb-3"><p className="ps-2">Status</p></th>
             <th className="pb-3 flex justify-end">Action</th>
           </tr>
         </thead>
         {filteredInvoices.map((invoice) => (
           <tbody className="border-t" key={invoice.invoice_number}>
            <tr>
             <td className="py-2"><input type="checkbox" className="w-4 h-4" onChange={() => updateItemValue(invoice.invoice_number, 'accepted')} checked={invoice.status !== "pending" && true}/></td>
             <td className="py-2 font-light">{invoice.invoice_number}</td>
             <td className="py-2 font-light">{invoice.posted_date}</td>
             <td className="py-2 font-light">{invoice.due_date}</td>
             <td className="py-2 font-light">{invoice.supplier}</td>
             <td className="py-2 font-light">{currencyFormatter(invoice.amount)} {invoice.currency}</td>
             {/* <td className="py-2 font-light">{formatCurrency(invoice.amount)} {invoice.currency}</td> */}
             <td className='text-left font-light'><p className={`px-2 ${invoice.status !== "pending" && 'text-white w-max bg-[#3E826D] rounded'}`}>{invoice.status}</p></td>
             <td className="text-right flex justify-end py-3">
                 <button className=" bg-[#3E826D] text-white py-1 px-2 rounded font-light" onClick={() => updateItemValue(invoice.invoice_number, 'accepted')}>Accept</button>
                 <button className="bg-amber-500 text-white  py-1 px-2 rounded font-light mx-3" onClick={() => updateItemValue(invoice.invoice_number, 'pending')}>Pending</button>
                 <button className="bg-red-500 text-white  py-1 px-2 rounded font-light" onClick={() => onDeleteInvoice(invoice.invoice_number)}>Exclude</button>
             </td>
             </tr>
           </tbody>
         ))}
       </table>
       </TableCard>
         <div className="flex flex-wrap justify-between items-center mt-5 p-3 md:p-6 bg-white rounded shadow">
          <div className="flex flex-col md:flex-row items-start md:items-center my-1">
          <p className="sm:me-4 font-light text-start">Accepted Invoices: <span className="font-normal">{acceptedInvoiceCount}</span></p>
          <p className="sm:me-4 font-light text-start">Amount:  <span className="font-normal">£{currencyFormatter(totalAcceptedAmount)}</span></p>
          <p className="sm:me-4 font-light text-start">Excluded Invoices: <span className="font-normal">{30 - invoices.length}</span></p>
          </div>
         <button className=" bg-[#3E826D] my-1  text-white py-2 px-4 rounded font-medium w-full xs:w-auto  tracking-wider md:mt-0 h-fit" onClick={submitPaymentHandler}>
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
