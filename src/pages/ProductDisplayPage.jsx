import React, { useState, useEffect } from 'react'
import Navbar from "../components/Navbar.jsx";
import Carousel from '../components/Carousel.jsx';

const addressOfTheServer = 'http://localhost:5050';

function ProductDisplayPage() {
    const [data, setData] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${addressOfTheServer}/api/v1/products/99999`);
                const resJson = await res.json();
                setData(resJson);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <div>
            <Navbar />
            <Carousel data={data} />
        </div>
    )
}

export default ProductDisplayPage
