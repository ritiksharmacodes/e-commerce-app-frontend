import React, { useState, useEffect, createElement } from 'react'
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
    // console.log(data);    

    const finalDataBlockArray = [];
    function detailBlockCreatorFunc(detailBlockObject) {

        const arr = [];
        for (const key in detailBlockObject) {
            const mainDataArr = [];

            for (const innerKey in detailBlockObject[key]) {
                mainDataArr.push(
                    <div key={innerKey} className='flex justify-between mb-3'>
                        <p className='text-gray-400 text-sm w-[30%]'>{innerKey}</p>
                        <p className='break-words font-medium text-sm w-[60%] '>{detailBlockObject[key][innerKey]}</p>
                    </div>
                );
            }

            arr.push(
                <div key={key}>
                    <h1 className='font-bold mb-4'>{key}</h1>
                    {mainDataArr}
                    <hr className='mt-4 opacity-25 mb-5' />
                </div>
            );
        }

        return arr;
    }
    data[0]?.extra_details_array.forEach(element => finalDataBlockArray.push(detailBlockCreatorFunc(element)));



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
                                {finalDataBlockArray}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default ProductDisplayPage
