import Link from "next/link";

export default function SubHeader() {

    const linkClassName = "ms-3 text-white/90 font-light";

    return(
        <>
        <div className="w-full hidden md:flex justify-between bg-[#1b493d] px-5 lg:px-12  py-4 border-t border-white shadow-lg">
        <nav className="flex">
                <Link href="/" className="text-white/90 font-light">Dashboard</Link>
                <Link href="/invoices" className={linkClassName}>Invoices</Link>
                <Link href="/reports" className={linkClassName}>Reports</Link>
                <Link href="/payments" className={linkClassName}>Payments</Link>
                <Link href="/disputes" className={linkClassName}>Disputes</Link>
            </nav>
        </div>
        </>
    )
}
