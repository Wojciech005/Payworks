"use client";

import PROJECT_DATA from "@/PROJECT_DATA";
import InvoiceTypeNavigation from "@/app/layout/invoice-type-navigation";
import TableCard from "@/app/components/UI/table-card";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import Heading from "@/app/components/UI/heading";
import SubHeading from "@/app/components/UI/sub-heading";



export default function PaidInvoices() {
  const data = PROJECT_DATA[0].pay_run.invoices;
  const paidInvoices = data.filter(invoice => invoice.status === "paid");


  return (
    <>
    <InvoiceTypeNavigation />
      <div className="flex min-h-screen flex-col py-8 md:py-12 px-5 lg:px-12">
        <Heading>
        <LiaFileInvoiceSolid className="text-emerald-800 text-3xl me-1" />
          Paid Invoices
        </Heading>
        <SubHeading invoicesNumber={paidInvoices.length}/>
        {paidInvoices.length === 0 ?  <h1 className="text-3xl text-center mt-6 font-light">There are no invoices</h1> : 
        <TableCard>
         <table className="table-auto w-full">
         <thead className="">
           <tr>
             <th className="text-left pb-3">Invoice Number</th>
             <th className="text-left pb-3">Posted Date</th>
             <th className="text-left pb-3">Due date</th>
             <th className="text-left pb-3">Supplier</th>
             <th className="text-left pb-3">Amount</th>
             <th className="text-left pb-3">Status</th>
           </tr>
         </thead>
         {paidInvoices.map((invoice) => (
           <tbody className="border-t" key={invoice.invoice_number}>
            <tr>
             <td className="py-2 font-light">{invoice.invoice_number}</td>
             <td className="py-2 font-light">{invoice.posted_date}</td>
             <td className="py-2 font-light">{invoice.due_date}</td>
             <td className="py-2 font-light">{invoice.supplier}</td>
             <td className="py-2 font-light">{invoice.amount.toLocaleString("en-US")} {invoice.currency}</td>
             <td className='py-2 font-light'>{invoice.status}</td>
             </tr>
           </tbody>
         ))}
       </table>
       </TableCard>
        }
      </div>
    </>
  );
}
