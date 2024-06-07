import LinkButton from "../components/UI/link-button";

export default function SubHeader() {
    return(
        <>
        <div className="w-full hidden md:flex justify-between bg-[#1b493d] px-5 lg:px-12  py-4 border-t border-white shadow-lg">
        <nav className="flex">
                <LinkButton linkRoute="/" linkName="Dashboard" linkClassName="text-white/90"/>
                <LinkButton linkRoute="/invoices" linkName="Invoices" linkClassName="ms-3 text-white/90"/>
                <LinkButton linkRoute="/reports" linkName="Reports" linkClassName="ms-3 text-white/90"/>
                <LinkButton linkRoute="/payments" linkName="Payments" linkClassName="ms-3 text-white/90"/>
                <LinkButton linkRoute="/disputes" linkName="Disputes" linkClassName="ms-3 text-white/90"/>
            </nav>
        </div>
        </>
    )
}
