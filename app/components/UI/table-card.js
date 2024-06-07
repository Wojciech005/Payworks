export default function TableCard({children}) {
  return (
    <>
      <div className="w-full bg-white p-3 md:p-6 mt-6 table-wrap rounded shadow">
        {children}
      </div>
    </>
  );
}
