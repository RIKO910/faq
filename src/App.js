import Faq from "./component/faq/Faq";
import { useEffect, useState } from "react";

function App() {
    const [faqS, setFaqS] = useState([]);

    useEffect(() => {
        const fetchFaqs = async () => {
            const res = await fetch('/faq.json');
            const data = await res.json();
            setFaqS(data);
        };
        fetchFaqs();
    }, []);

    return (
        <div>
            <Faq qaList={faqS} />
        </div>
    );
}

export default App;
