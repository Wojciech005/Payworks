export default function SelectPage() {
  return (
    <>
      <div>
        <label htmlFor="month"></label>
        <select name="month" className="p-3 rounded-lg shadow-lg outline-none font-light" defaultValue="May">
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>
    </>
  );
}
