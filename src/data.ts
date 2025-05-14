

let invoices = [
    {
        name: "Santa Monica",
        number: 1995,
        amount: "$10,800",
        due: "12/05/1995",
    },
    {
        name: "Los Angeles",
        number: 1996,
        amount: "$9,450",
        due: "01/10/1996",
    },
    {
        name: "San Francisco",
        number: 1997,
        amount: "$12,200",
        due: "03/15/1997",
    },
    {
        name: "San Diego",
        number: 1998,
        amount: "$8,300",
        due: "06/22/1998",
    },
    {
        name: "Sacramento",
        number: 1999,
        amount: "$14,100",
        due: "09/30/1999",
    },
    {
        name: "Fresno",
        number: 2000,
        amount: "$7,950",
        due: "11/18/2000",
    },
    {
        name: "Long Beach",
        number: 2001,
        amount: "$10,500",
        due: "01/05/2001",
    },
]

export function getInvoices(){
    return invoices;
}

export function getInvoice(number: number){
    return invoices.find((invoice)=>invoice.number === number); //Metodo find busca pela invoice correspondente ao numero recebido no parametro
}

export function deleteInvoice(number:any){
    invoices = invoices.filter(
        (invoice)=>invoice.number !== number
    );
}