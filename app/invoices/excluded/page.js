"use client";

import { useState } from "react";
import PROJECT_DATA from "@/PROJECT_DATA";
import InvoiceTypeNavigation from "@/app/layout/invoice-type-navigation";
import TableCard from "@/app/components/UI/table-card";
import Button from "@/app/components/UI/button";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import Heading from "@/app/components/UI/heading";
import SubHeading from "@/app/components/UI/sub-heading";
import { currencyFormatter } from "@/app/utility";




export default function ExcludedInvoices() {
  const data = PROJECT_DATA[0].pay_run.invoices;
  const pendingInvoices = data.filter((invoice) => invoice.excluded === true);

  const [invoices, setInvoices] = useState(pendingInvoices);

  function onDeleteInvoice(invoice_number) {
    const updatedInvoices = invoices.filter(
      (invoice) => invoice.invoice_number !== invoice_number
    );
    setInvoices(updatedInvoices);
  }



  const updateItemValue = (invoice_number, updatedValue) => {
    const updatedItems = invoices.map((invoice) => {
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
      <div className="flex min-h-screen flex-col py-8 md:py-12 px-5 lg:px-12">
        <Heading>
        <LiaFileInvoiceSolid className="text-emerald-800 text-3xl me-1 font-light" />
          Excluded Invoices
        </Heading>
        <SubHeading invoicesNumber={invoices.length}/>
        {invoices.length === 0 ? (
          <h1 className="text-3xl text-center mt-6 font-light">
            There are no invoices
          </h1>
        ) : (
          <div>
            <TableCard>
              <table className="table-auto w-full">
                <thead className="">
                  <tr>
                    <th className="text-left pb-3"><input type="checkbox" className="w-4 h-4"/></th>
                    <th className="text-left pb-3">Invoice Number</th>
                    <th className="text-left pb-3">Posted Date</th>
                    <th className="text-left pb-3">Due date</th>
                    <th className="text-left pb-3">Supplier</th>
                    <th className="text-left pb-3">Amount</th>
                    <th className="text-left pb-3">
                      <p className="ps-2">Status</p>
                    </th>
                    <th className="text-right pb-3 flex justify-end">Action</th>
                  </tr>
                </thead>
                {invoices.map((invoice) => (
                  <tbody className="border-t" key={invoice.invoice_number}>
                    <tr>
                      <td className="py-2">
                        <input
                          type="checkbox"
                          className="w-4 h-4"
                          checked={invoice.status === "pending" && true}
                          onChange={() => updateItemValue(invoice.invoice_number, 'pending')}
                        />
                      </td>
                      <td className="py-2 font-light">
                        {invoice.invoice_number}
                      </td>
                      <td className="py-2 font-light">{invoice.posted_date}</td>
                      <td className="py-2 font-light">{invoice.due_date}</td>
                      <td className="py-2 font-light">{invoice.supplier}</td>
                      <td className="py-2 font-light">
                      { currencyFormatter(invoice.amount)} {invoice.currency}
                      </td>
                      <td className="text-left font-light">
                        <p
                          className={`px-2 ${
                            invoice.status !== "excluded" &&
                            "text-white w-max bg-[#3E826D] rounded"
                          }`}>
                          {invoice.status}
                        </p>
                      </td>
                      <td className="text-right flex justify-end py-4">
                        <button
                          className=" bg-[#3E826D] font-light text-white py-1 px-2 rounded"
                          onClick={() =>
                            updateItemValue(invoice.invoice_number, "pending")
                          }>
                          Accept
                        </button>
                        <button
                          className="bg-amber-500 text-white  py-1 px-2 rounded font-light mx-3"
                          onClick={() =>
                            updateItemValue(invoice.invoice_number, "excluded")
                          }>
                          Exclude
                        </button>
                        <button
                          className=" bg-red-500 font-light text-white py-1 px-2 rounded"
                          onClick={() =>
                            onDeleteInvoice(invoice.invoice_number)
                          }>
                          Dispute
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </TableCard>
            <div className="flex justify-end p-3 md:p-6 mt-5  bg-white shadow rounded">
              <Button handleClick={()=> alert("Invoices transferred!")}>Transfer</Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
