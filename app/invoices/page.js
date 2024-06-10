"use client";
// import { useState } from "react";
import PROJECT_DATA from "@/PROJECT_DATA";
import InvoiceTypeNavigation from "../layout/invoice-type-navigation";
import TableCard from "../components/UI/table-card";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import Heading from "../components/UI/heading";
import SubHeading from "../components/UI/sub-heading";
import Summary from "../components/summary";

export default function Invoices() {
  const invoices = PROJECT_DATA[0].pay_run.invoices;
  // const [invoices, setInvoices] = useState(data);


  return (
    <>
    <InvoiceTypeNavigation />
      <div className="flex min-h-screen flex-col py-8 md:py-12 px-5 lg:px-12">
        <Heading>
          <LiaFileInvoiceSolid className="text-emerald-800 text-3xl me-1" />
          All Invoices
        </Heading>
        <SubHeading invoicesNumber={invoices.length}/>
        {invoices.length === 0 ?  <h1 className="text-3xl text-center font-light">There are no invoices</h1> : 
          <TableCard>
         <table className="table-auto w-full">
         <thead className="">
           <tr>
             <th className="text-left pb-3">Invoice Number</th>
             <th className="text-left pb-3">Posted Date</th>
             <th className="text-left pb-3">Due date</th>
             <th className="text-left pb-3">Supplier Ref</th>
             <th className="text-left pb-3">Supplier</th>
             <th className="text-left pb-3">Amount</th>
             <th className="text-end pb-3">Status</th>
           </tr>
         </thead>
         {invoices.map((invoice) => (
           <tbody className="border-t" key={invoice.invoice_number}>
            <tr>
             <td className="py-2 font-light">{invoice.invoice_number}</td>
             <td className="py-2 font-light">{invoice.posted_date}</td>
             <td className="py-2 font-light">{invoice.due_date}</td>
             <td className="py-2 font-light">{invoice.supplier_reference}</td>
             <td className="py-2 font-light">{invoice.supplier}</td>
             <td className="py-2 font-light">{invoice.amount.toLocaleString("en-US")} {invoice.currency}</td>
             <td className='py-2 font-light text-end'>{invoice.status}</td>
             </tr>
           </tbody>
         ))}
       </table>
           </TableCard>
        }
        <Summary />
      </div>
    </>
  );
}
