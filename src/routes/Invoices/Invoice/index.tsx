import { useNavigate, useParams } from "react-router-dom"
import { deleteInvoice, getInvoice } from "../../../data";


export default function Invoice(){
    const params = useParams();
    const navigate = useNavigate();

    const invoice = getInvoice(Number(params.invoiceId)) /* :invoiceId é o parametro da invoice especifica que estou recebendo no main.tsx*/

    return (
        <>
            <main style={{padding: "1rem"}}>
                <h2>Total Due: {invoice?.amount}</h2>
                <p>
                    {invoice?.name}:{invoice?.number}
                </p>
                <p>Due Date: {invoice?.due}</p>

                <p>
                    <button
                        onClick={() => {
                            deleteInvoice(invoice?.number);
                            navigate("/invoices"+location.search);
                        }}
                    >Delete</button> 
                </p>
            </main>
        </>
    )
} 