import React, { useState, useEffect } from 'react'
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

                <div className='p-2 mt-4'>
                    <Accordion slotProps={{ transition: {timeout: 0} }}>
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography sx={{ fontFamily: "Montserrat" }} component="span">Product Details</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ fontFamily: "Montserrat" }}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, at incidunt aut ratione ex obcaecati enim facilis optio sint voluptatem rem debitis aliquid! Suscipit assumenda recusandae dolor nesciunt a neque, magnam, enim cumque sequi provident maxime? Sapiente corrupti similique sunt praesentium voluptatibus suscipit magni architecto porro, commodi doloribus repudiandae velit a ut atque assumenda amet soluta consequuntur, quod totam sequi, dicta numquam aut. Omnis, quod nemo quaerat voluptatum incidunt sequi eum perferendis debitis ad laborum nulla placeat delectus deserunt accusantium architecto tempore atque neque labore recusandae odio voluptates earum. Nobis qui minima labore necessitatibus commodi et incidunt ipsum. Sequi, eos voluptatem possimus beatae aperiam laborum. Inventore autem itaque dolorum excepturi blanditiis, alias numquam quidem adipisci, minus pariatur iste consequatur commodi. Officiis ullam tempore odit expedita deleniti, qui illum aliquam! Doloribus deleniti nobis dolores provident quo veritatis, dolor ipsum, et libero repellendus atque quia. Commodi, voluptate dicta corrupti, voluptatem reprehenderit voluptatum tempora dolorum id laboriosam possimus sapiente? Quas accusantium illum voluptatibus sunt laboriosam totam possimus animi! Laudantium nihil in iusto inventore ducimus sapiente, numquam dolores dolorem officia vel sunt itaque odit magni unde! Nulla sunt expedita esse repellendus numquam nostrum optio soluta quasi quos sed, molestias vel ducimus voluptatum a laudantium ipsum repellat quis? Aliquam libero incidunt sit id dignissimos, eum quos necessitatibus. Eveniet dicta hic amet! Distinctio voluptatum tempora in iusto, eligendi necessitatibus, rem ex accusantium suscipit cumque maxime iste placeat exercitationem soluta ullam, repellendus optio aliquid eaque error itaque dolores dicta perferendis! Officia neque rem quia dolorum quaerat iste, at officiis enim aliquam tenetur quo? Fugit pariatur officia, alias delectus commodi asperiores iste necessitatibus. Ad aliquid harum, vero unde, quis nam libero ex pariatur ipsam quibusdam placeat culpa cum neque nihil dolor optio nulla omnis. Aspernatur nesciunt cupiditate quod eveniet ducimus? Doloribus laborum impedit iusto unde enim illum eos similique est odit ex facilis ab voluptatum minus nostrum vel rerum dolor deserunt, atque aliquam quae tempore reiciendis. Ratione, nisi temporibus? Ex quis amet, pariatur consequatur laudantium voluptate, quos debitis aut corporis asperiores voluptatem sed, itaque incidunt cum laborum molestias similique error earum numquam? Non officiis perspiciatis ad quam aut cupiditate ducimus, unde sint, adipisci assumenda earum veniam porro asperiores, praesentium incidunt omnis soluta! Ut fuga accusamus perspiciatis dignissimos. Eaque ipsum nisi laboriosam ducimus totam earum vero sint distinctio. Aut ipsum quibusdam dicta nam eum cum eveniet maiores dolor repellendus earum. Doloribus, illum repellat cupiditate quisquam id exercitationem qui similique? Numquam, molestias! Nulla cumque assumenda similique inventore quidem recusandae, commodi tempora illum doloremque reiciendis quis excepturi debitis porro dolore? Vel at quam aperiam eaque dolor quo neque mollitia accusantium iste quibusdam nam optio earum, qui corporis. Amet dolorum expedita aut in sint deserunt sit, porro tenetur? Doloribus, alias molestiae? Esse, inventore sapiente dolor delectus unde cupiditate possimus dolorum consequuntur facere repellendus aliquid corporis qui incidunt vel, cumque minima expedita enim, consectetur sint? Asperiores veritatis dolor porro soluta aliquid, atque possimus, hic commodi dicta nemo vel corporis? Ab provident obcaecati officiis eligendi, doloremque repellendus placeat deserunt nam officia quae aut amet vel quaerat repudiandae, facere quo perspiciatis quia aliquam inventore architecto atque. Molestias obcaecati amet exercitationem dolorem laborum accusamus deleniti ea. Quisquam ex velit nisi alias tempora in accusamus, aliquid esse consequatur, architecto quod corporis ipsa. Eaque consequatur neque pariatur eius fugiat porro optio velit ipsa? Hic quas dicta, sed exercitationem asperiores ad laborum, repellendus nisi distinctio error vitae ipsum explicabo accusantium molestias blanditiis eveniet eum alias. Consequuntur exercitationem veniam pariatur in, eius laboriosam reprehenderit animi fuga obcaecati sed beatae cum, officia deserunt, aperiam ex itaque facilis temporibus repudiandae delectus? Totam odio perferendis quis, itaque odit porro, excepturi, alias nobis laboriosam voluptatem accusantium suscipit cum magnam dolores. Laboriosam, maxime? Provident assumenda consectetur ab optio asperiores, exercitationem quis qui, voluptates iure dolorum quidem fugit totam, sequi quisquam iste illum? Reprehenderit omnis harum est nisi vitae magnam obcaecati corporis nobis sed ex repudiandae cupiditate, eaque repellendus nam dolore at ipsum quibusdam. Culpa, obcaecati consequuntur sequi fugiat asperiores, saepe dolorem enim quis nostrum ipsam, ex iste! Illo, tempore. Molestias repudiandae animi nam maxime tenetur aliquam fuga error dolorem cupiditate quam hic velit voluptas est maiores, quo autem sit officia laboriosam molestiae. Eaque nisi at autem, numquam atque voluptatibus. Numquam fugit voluptatibus aliquam culpa reiciendis? Repellat, aliquam velit quo non, corporis ducimus maxime laborum deleniti deserunt tempora suscipit incidunt accusamus numquam saepe culpa nostrum. Ullam animi deleniti dignissimos odit molestiae, quia maiores qui architecto corporis fugit magnam id delectus autem quod vel rem consequuntur perspiciatis fuga nostrum consectetur aperiam iusto? Totam sit atque itaque voluptas debitis, dolore impedit deleniti corrupti assumenda odit velit nam sed esse et, quasi illo voluptatum! Suscipit quos dolores eaque laboriosam laudantium, dolore ipsum temporibus a velit nihil nemo corrupti, necessitatibus eveniet exercitationem quasi provident fuga aperiam ea? Enim aliquid sint qui laboriosam magnam, non vel, cumque repudiandae labore quia quos accusantium! Quidem velit totam cumque unde impedit, vel beatae incidunt! Hic quidem enim tenetur qui amet aliquam fugit. Officia est assumenda, quia voluptatum mollitia autem vero inventore, quo itaque ducimus doloremque laboriosam. Similique delectus doloremque accusamus sunt ratione? Cupiditate architecto tempore ea soluta officiis commodi amet exercitationem odit? Repellat sint culpa sunt alias quasi! Non laboriosam architecto quisquam necessitatibus eaque, quidem ducimus inventore magni, quae minima illum consequuntur odio dicta aliquid eum atque ad fuga provident sed voluptatem nisi accusantium. Id corrupti atque accusamus ipsum quis. Et a nam amet beatae, architecto iusto fuga rerum inventore sequi nisi illum doloribus harum dignissimos, pariatur deleniti minus perferendis natus accusantium ex dolores omnis quos temporibus placeat. Velit provident nesciunt accusantium alias tenetur aperiam blanditiis tempora vitae! Quo iusto nostrum quia beatae itaque illum eum qui, nihil autem quidem laborum odio assumenda possimus alias. Sed qui id fugit corrupti, quaerat, nulla cum aspernatur voluptatibus voluptates voluptate quis voluptatem quia! Voluptas atque at aliquam iste nihil minus assumenda maiores incidunt? Facere dolor ullam voluptate dolorem voluptatibus libero et qui enim voluptates ab quasi nihil molestias sint eveniet eos doloribus deleniti provident, ex debitis consequatur! Excepturi id saepe quia dicta, hic illum perferendis ipsum cum?
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
