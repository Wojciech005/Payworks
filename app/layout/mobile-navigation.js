import Link from "next/link";
import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function MobileNavigation({ mobileMenu, mobileMenuOverlay, handleClick}) {

  const linkClassName = "text-lg font-light text-gray ms-3 mb-4"
  return (
    <>
      <div className={mobileMenuOverlay} onClick={handleClick}>
        <div className={mobileMenu} onClick={handleClick}>
          <Image
            src="/Payworks-logo.svg"
            width={120}
            height={120}
            className="ms-3 mb-6"
            alt="Payworks - company logo."
            priority
          />
          <nav className="h-full flex flex-col">
            <Link className={linkClassName} href="/" onClick={handleClick}>
              Dashboard
            </Link>
            <Link
              className={linkClassName}
              href="/invoices"
              onClick={handleClick}>
              Invoices
            </Link>
            <Link
              className={linkClassName}
              href="/reports"
              onClick={handleClick}>
              Reports
            </Link>
            <Link
              className={linkClassName}
              href="/payments"
              onClick={handleClick}>
              Payments
            </Link>
            <Link
              className={linkClassName}
              href="/disputes"
              onClick={handleClick}>
              Disputes
            </Link>
            <Link
              className={linkClassName}
              href="/data-transfer"
              onClick={handleClick}>
              Data Transfer
            </Link>
            <button onClick={handleClick}>
              <AiOutlineCloseCircle className="w-10 h-10 shadow-2xl font-light ms-2  text-[#52B9A3]" />
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
