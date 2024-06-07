import Link from "next/link";
import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function MobileNavigation({ mobileMenu, mobileMenuOverlay, handleClick, closeNavigation }) {
  return (
    <>
      <div className={mobileMenuOverlay} onClick={handleClick}>
        <div className={mobileMenu} onClick={handleClick}>
          <Image
            src="/Payworks-logo.png"
            width={120}
            height={120}
            className="ms-3 mb-6"
            alt="Payworks - company logo."
          />
          <nav className="h-full flex flex-col">
            <Link className="text-lg font-light text-gray ms-3 mb-4" href="/" onClick={handleClick}>
              Dashboard
            </Link>
            <Link
              className="text-lg font-light text-gray ms-3 mb-4"
              href="/invoices"
              onClick={handleClick}>
              Invoices
            </Link>
            <Link
              className="text-lg font-light text-gray ms-3 mb-4"
              href="/reports"
              onClick={handleClick}>
              Reports
            </Link>
            <Link
              className="text-lg font-light text-gray ms-3 mb-4"
              href="/payments"
              onClick={handleClick}>
              Payments
            </Link>
            <Link
              className="text-lg font-light text-gray ms-3 mb-4"
              href="/disputes"
              onClick={handleClick}>
              Disputes
            </Link>
            <button onClick={handleClick}>
              <AiOutlineCloseCircle className="w-10 h-10 shadow-2xl font-light ms-2" />
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
