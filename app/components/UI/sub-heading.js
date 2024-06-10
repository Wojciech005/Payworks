export default function SubHeading({invoicesNumber}) {
  return (
    <>
      <div className="flex">
        <h1 className="flex items-center me-4 font-light">
        Invoices number: {invoicesNumber}
        </h1>
      </div>
    </>
  );
}
