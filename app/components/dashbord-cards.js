import Tile from "./UI/tile";

export default function DashboardCards() {
  return (
    <>
      <section className="flex flex-wrap justify-between mt-10">
        <Tile tileTitle="Invoices Number" tileValue="192" />
        <Tile tileTitle="Pending payments" tileValue="127" />
        <Tile tileTitle="Paid Amount" tileValue="£43,000" />
        <Tile tileTitle="Pending credit" tileValue="£470,000" />
      </section>
    </>
  );
}
