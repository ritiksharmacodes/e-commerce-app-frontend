import React from 'react'


function ajjdjs(detailBlockObject) {

    const arr = [];
    for (const key in detailBlockObject) {
        const mainDataArr = [];

        for (const innerKey in detailBlockObject[key]) {
            mainDataArr.push(
                <div className='flex justify-between mb-3'>
                    <p className='text-gray-400 text-sm w-[30%]'>{innerKey}</p>
                    <p className='font-bold text-sm w-[60%] break-all'>{detailBlockObject[key][innerKey]}</p>
                </div>
            );
        }

        arr.push(
            <div>
                <h1 className='font-bold mb-2'>{key}</h1>
                {mainDataArr}
                <hr className='mt-4 opacity-50' />
            </div>
        );
    }

    return arr;
}

function ProductDetailBlock({ detailBlockObject }) {
    return (
        <div>
            {/* <h1 className='font-bold mb-2'>{console.log(detailBlockObject)}</h1> */}
            {ajjdjs(detailBlockObject)}
            {/* <hr className='mt-4 opacity-50' /> */}
        </div>
    )
}

export default ProductDetailBlock
