import Card from "./UI/card";

export default function Summary(){
    return(
        <>
          <Card>
          <h2 className="text-xl mb-2">Summary</h2>
          <div>
            <ul className="flex flex-wrap flex-col md:flex-row">
              <li className="flex me-5">
              <p className="me-2 font-light">All Invoices:</p>
              <span className="font-bolder">33</span>
              </li>
              <li className="flex me-5">
              <p className="me-2 font-light">Paid:</p>
              <span className="font-bolder">£0,00</span>
              </li>
              <li className="flex me-5">
              <p className="me-2 font-light">Pending Credit:</p>
              <span className="font-bolder">£470,000</span>
              </li>
              <li className="flex me-5">
              <p className="me-2 font-light">Pending Invoices:</p>
              <span className="font-bolder">30</span>
              </li>
              <li className="flex me-5">
              <p className="me-2 font-light">Excluded Invoices:</p>
              <span className="font-bolder">3</span>
              </li>
            </ul>
          </div>
      </Card>
        </>
    )
}