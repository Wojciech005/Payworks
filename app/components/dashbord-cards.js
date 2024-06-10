import Tile from "./UI/tile";

export default function DashboardCards() {
  return (
    <>
      <section className="flex flex-wrap justify-between mt-10">
        <Tile tileTitle="Invoices Number" tileValue="33" />
        <Tile tileTitle="Pending Credit" tileValue="£470,000" />
        <Tile tileTitle="Paid Amount" tileValue="£0,00" />
        <Tile tileTitle="Profit" tileValue="27%" />
      </section>
    </>
  );
}
