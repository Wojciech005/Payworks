import Link from "next/link";

export default function InvoiceTypeNavigation() {

    const linkClassName = "text-gray-600 ms-3 font-light";
    return(
        <>
        <div className="w-full flex justify-between bg-white px-5 lg:px-12 py-4 border-t  shadow-lg">
        <nav className="flex  md:ps-20 ms-2">
                <Link href="/invoices" className="text-gray-600 font-light">All Invoices</Link>
                <Link href="/invoices/pending" className={linkClassName}>Pending</Link>
                <Link href="/invoices/excluded" className={linkClassName}>Excluded</Link>
                <Link href="/invoices/paid" className={linkClassName}>Paid</Link>
            </nav>
        </div>
        </>
    )
}