import React, { useState, useEffect, createElement } from 'react'
import Navbar from "../components/Navbar.jsx";
import Carousel from '../components/Carousel.jsx';

// below imports are for accordion
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
    console.log(data[0]);

    function extra_details_parser() {
        // if (data[0]?.extra_details_object.hasOwnProperty('General')) {

        //     // for()
        // }

        const divEl = document.createElement('div');
        const childDivEl = document.createElement('div');
        const childPara1 = document.createElement('p');
        const childPara2 = document.createElement('p');
        const hOneEl = document.createElement('h1');
        const hrEl = document.createElement('hr'); 
        
        hOneEl.innerText = 'General';
        hOneEl.className = 'font-bold mb-2';

        childDivEl.className = 'flex justify-between';
        childPara1.className = 'text-gray-400 text-sm w-[30%]';
        childPara1.innerText = 'Not covered in warranty';
        childPara2.className = 'font-bold text-sm w-[60%] break-all';
        childPara2.innerText = 'Contact - productfeedback@nexxbase.com | support.gonoise.com | +91 8882132132';
        hrEl.className = 'mt-4 opacity-50';

        
        childDivEl.appendChild(childPara1);
        childDivEl.appendChild(childPara2);
        
        divEl.appendChild(hOneEl);
        divEl.appendChild(childDivEl);
        divEl.appendChild(hrEl);





        // <div>
        //     <h1 className='font-bold mb-2'>General</h1>
        //     <div className='flex justify-between'>
        //         <p className='text-gray-400 text-sm w-[30%]'>Not covered in warranty</p>
        //         <p className='font-bold text-sm w-[60%] break-all'>Contact - productfeedback@nexxbase.com | support.gonoise.com | +91 8882132132</p>
        //     </div>
        //     <hr className='mt-4 opacity-50' />
        // </div>
        

        return divEl;
    }


    // below code is for the price formatter
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',

        // These options can be used to round to whole numbers.
        trailingZeroDisplay: 'stripIfInteger'   // This is probably what most people
        // want. It will only stop printing
        // the fraction when the input
        // amount is a round number (int)
        // already. If that's not what you
        // need, have a look at the options
        // below.
        //minimumFractionDigits: 0, // This suffices for whole numbers, but will
        // print 2500.10 as $2,500.1
        //maximumFractionDigits: 0, // Causes 2500.99 to be printed as $2,501
    });

    return (
        <>
            <div className=''>
                <Navbar />
                <Carousel data={data} />

                <div className='flex justify-center items-center gap-2 p-2'>
                    <button className='bg-blue-400 px-5 py-2 rounded-lg text-white capitalize shadow-lg cursor-pointer'>Add to cart</button>
                    <button className='capitalize bg-amber-300 px-5 py-2 rounded-lg shadow-lg cursor-pointer'>Buy now</button>
                </div>

                <p className='p-2 mt-4'>{data[0]?.name}</p>

                <p className='flex items-center p-2 text-2xl font-bold'>{formatter.format(data[0]?.mrp)}</p>

                <div className='mt-4'>
                    <Accordion slotProps={{ transition: { timeout: 0 } }}>
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography sx={{ fontFamily: "Montserrat" }} component="span">Product Details</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography component='div' sx={{ fontFamily: "Montserrat" }}>
                                {/* {extra_details_parser()} */}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className='bg-green-900 h-[150px]'></div>
                <div className='bg-purple-900 h-[150px]'></div>
                <div className='bg-pink-900 h-[150px]'></div>

            </div>

            <div className='text-blue-800 text-center h-[150px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ex quidem nemo nam! Quae nulla rerum quas eius ducimus iste quis reprehenderit, id beatae mollitia consectetur a recusandae labore minima.</div>
        </>
    )
}

export default ProductDisplayPage
