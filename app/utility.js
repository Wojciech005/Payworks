export function acceptedAmount(invoices) {
    let totalAmount = 0;
    invoices.forEach(invoice => {
      if (invoice.status === 'accepted') {
        totalAmount += invoice.amount;
      }
    });
    return totalAmount;
  }

  export function countAcceptedInvoices(invoices) {
    let acceptedCount = 0;
    invoices.forEach(invoice => {
      if (invoice.status === 'accepted') {
        acceptedCount++;
      }
    });
    return acceptedCount;
  }
  
  

  export function currencyFormatter(amount){
    let item;
    item = amount.toLocaleString("en-US");
    return item;
  }

