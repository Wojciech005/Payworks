import { usePathname } from 'next/navigation'
import Link from "next/link";

export default function InvoiceTypeNavigation() {
    const pathname = usePathname();

    const linkClassName = "text-gray-600 me-3 font-light";
    const active = "text-gray-600 me-3 font-light border-b border-gray-300";
    
    return(
        <>
        <div className="w-full flex justify-between bg-white px-5 lg:px-12 py-4 border-t  shadow-lg">
        <nav className="flex  md:ps-20 ms-2">
                <Link href="/invoices" className={`link ${pathname === '/invoices' ? `${active}` : `${linkClassName}`}`}>All Invoices</Link>
                <Link href="/invoices/pending" className={`link ${pathname === '/invoices/pending' ? `${active}` : `${linkClassName}`}`}>Pending</Link>
                <Link href="/invoices/excluded" className={`link ${pathname === '/invoices/excluded' ? `${active}` : `${linkClassName}`}`}>Excluded</Link>
                <Link href="/invoices/paid" className={`link ${pathname === '/invoices/paid' ? `${active}` : `${linkClassName}`}`}>Paid</Link>
            </nav>
        </div>
        </>
    )
}