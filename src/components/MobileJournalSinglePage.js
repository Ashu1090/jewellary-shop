import React from 'react'
import { Link } from 'react-router-dom'

const MobileJournalSinglePage = () => {
    return (
        <div>
            <div className='jsMainParent mt-28' id='mjspJournal'>

                <div className='jsLeft'>
                    <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/files/Sukin_Journal_Heading_2-01_2500x2500_6e692e60-90cb-4cd0-9006-a6f1d09fe1c4_360x.png?v=1613561992' alt='hey' className=' w-72' />
                    <p className=' mt-8'> Discover the world of natural through our <br />
                        eyes! From design tips, lifestyle and <br />
                        environmental hacks to inspirational<br />
                        interviews! Explore it all.</p>

                    <Link to={`/journal/april`}>
                        <button className='readBtn '> READ THE JOURNAL </button>
                    </Link>
                </div>

                <div className='jsRight flex flex-row gap-24'>

                    <Link to={`/journal/april`}>
                        <img src='https://www.gvenketram.com/wp-content/uploads/2023/08/CMR-Jewellery-3-750x1024.jpg' alt='hey' className='jsImg rounded-xl' />
                    </Link>

                    <img src='https://th-i.thgim.com/public/incoming/dpw1nj/article65937010.ece/alternates/FREE_1200/ponniyin%20selvan%20(2).jpg' alt='hey' className='jsImg rounded-xl' />


                </div>

                <div className='jsRightText flex flex-row gap-36 relative font-bold'>
                    <p> Jewellery creates a exta attraction <br />  STYLE AND TIPS </p>
                    <p> Traditional jewellery</p>


                </div>
            </div>
        </div>
    )
}

export default MobileJournalSinglePage