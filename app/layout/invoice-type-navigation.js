import LinkButton from "../components/UI/link-button";

export default function InvoiceTypeNavigation() {
    return(
        <>
        <div className="w-full flex justify-between bg-white px-5 lg:px-12 py-4 border-t  shadow-lg">
        <nav className="flex  md:ps-20 ms-2">
                <LinkButton linkRoute="/invoices" linkName="All Invoices" linkClassName="text-gray-600"/>
                <LinkButton linkRoute="/invoices/pending" linkName="Pending" linkClassName="ms-3 text-gray-600"/>
                <LinkButton linkRoute="/invoices/excluded" linkName="Excluded" linkClassName="ms-3 text-gray-600"/>
                <LinkButton linkRoute="/invoices/paid" linkName="Paid" linkClassName="ms-3 text-gray-600"/>
            </nav>
        </div>
        </>
    )
}