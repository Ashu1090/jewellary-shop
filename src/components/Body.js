

import React from 'react'
import "../styles/Body.css";
import { useState } from 'react';
import { store } from '../productsStore/Store';
import HoverImage from "react-hover-image/build"
import { Link } from 'react-router-dom';

const Body = () => {

    const [show, setShow] = useState(true);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);


    const showHandler = () => {
        setShow(true)
        document.querySelector(".bodyContent").classList.add("transition");
        setShow2(false)
        setShow3(false)
        setShow4(false)

        document.querySelector(".bodyContent").style.opacity = "1";
        document.querySelector(".hairContent").style.opacity = "0";
        document.querySelector(".newContent").style.opacity = "0";
        document.querySelector(".travelContent").style.opacity = "0";

    }

    const showHandler2 = () => {
        setShow2(true)
        document.querySelector(".hairContent").classList.add("transition2");
        setShow(false)
        setShow3(false)
        setShow4(false)


        document.querySelector(".hairContent").style.opacity = "1";
        document.querySelector(".bodyContent").style.opacity = "0";
        document.querySelector(".newContent").style.opacity = "0";
        document.querySelector(".travelContent").style.opacity = "0";

    }

    const showHandler3 = () => {
        setShow3(true)
        document.querySelector(".travelContent").classList.add("transition3");
        //document.querySelector(".hairContent").style.opacity = "0";
        //document.querySelector(".newContent").style.opacity="0"
        setShow(false)
        setShow2(false)
        setShow4(false)

        document.querySelector(".travelContent").style.opacity = "1";
        document.querySelector(".hairContent").style.opacity = "0";
        document.querySelector(".bodyContent").style.opacity = "0";
        document.querySelector(".newContent").style.opacity = "0";
    }

    const showHandler4 = () => {
        setShow4(true)
        document.querySelector(".newContent").classList.add("transition4");
        //document.querySelector(".travelContent").style.opacity = "0";
        setShow(false)
        setShow2(false)
        setShow3(false)

        document.querySelector(".newContent").style.opacity = "1";
        document.querySelector(".hairContent").style.opacity = "0";
        document.querySelector(".bodyContent").style.opacity = "0";
        document.querySelector(".travelContent").style.opacity = "0";
    }


    const dontShowHandler = () => {
        setShow(false)
        setShow2(false)
        setShow3(false)
        setShow4(false)

        document.querySelector(".newContent").style.opacity = "0";
        document.querySelector(".hairContent").style.opacity = "0";
        document.querySelector(".bodyContent").style.opacity = "0";
        document.querySelector(".travelContent").style.opacity = "0";

    }
    return (
        <div>
            <div className='categoryHold flex flex-col gap-14 font-normal absolute left-16 top-11'>

                <div className='bodyHold lineHeight w-56 w56rem' onMouseMove={showHandler}>
                    <p className=' font-semibold hover-underline-animation'>TRADITION</p>
                </div>

                <div className='hairHold lineHeight w-56' onMouseMove={showHandler2}>
                    <p className=' font-semibold hover-underline-animation'>TRENDING</p>
                </div>

                <div className='travelHold w-52 lineHeight' onMouseMove={showHandler3}>
                    <p className=' font-semibold hover-underline-animation'>MODERN</p>
                </div>



                <div className='newHold lineHeight' onMouseMove={showHandler4}>
                    <p className=' font-semibold hover-underline-animation'>NEW</p>
                </div>



            </div>



            {show && <div className=' z-50 bodyContent color text-base' onMouseLeave={dontShowHandler}>
                <p>   JADAU RINGS </p>
                <p>   JADAU NECKLACE </p>
                <p>   SILVER ANKLETS </p>
                <p>   ODDIYANAM </p>
                <p>   TEMPLE JEWELLERY </p>
                <p>   NEW COLLECTIONS </p>

                <div className='bodyTypeHold flex'>
                    {store.map((item) => {
                        if (item.type == "navbar-BodyType") {
                            return (
                                <Link to={`/${item.id}`} key={item.id}>

                                    <div key={item.id} className="bodyTypeIndivitual">
                                        <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg} className="rounded-xl  bodyTypeImage" />
                                        <p className=' text-center fs bodyTypeName'> {item.name} </p>
                                    </div>

                                </Link>)
                        }
                    })}
                </div>

            </div>}



            {show2 && <div className=' z-50 hairContent flex flex-col' onMouseLeave={dontShowHandler}>
                <div className='hairTypeCategoryONE flex flex-col gap-8'>
                    <p className=' font-bold text-xl'>  CATEGORY </p>
                    <p>  GOLD </p>
                    <p>  SILVER </p>
                    <p>  DIAMOND </p>
                </div>


                <div className='hairTypeCategoryTWO flex-col flex gap-10'>
                    <p className='font-bold'>  JEWELLERY CONCERN </p>
                    <p>  Ethical Sourcing </p>
                    <p>  Quality Assurance </p>
                    <p>  Counterfeit Detection </p>
                    <p>  Consumer Protection </p>
                    <p>  Environmental Impact </p>
                </div>

                <div className='hairImageHold flex flex-row gap-10'>
                    <img src='https://c0.wallpaperflare.com/preview/984/867/753/jewellery-gold-wedding-indian.jpg' className=' rounded-xl w-52' />
                    <img src='https://png.pngtree.com/png-clipart/20210201/ourmid/pngtree-authentic-necklace-jewellery-set-png-image_2878910.jpg' className=' rounded-xl w-52' />
                </div>

                <div className='hairTextHold flex flex-row relative font-semibold'>
                    <p className='flex flex-row flex-wrap w-56'>Make The Switch! Why Natural Is Best</p>
                    <p className='flex flex-row flex-wrap w-56'>How to lead a natural & sustainable lifestyle</p>
                </div>



            </div>}

            {show3 && <div className='z-50 travelContent' onMouseLeave={dontShowHandler}>
                <div className='flex flex-row'>
                    <div className='TravelStoreHold flex flex-row gap-16'>
                        {store.map((item) => {
                            if (item.type == "navbar-TravelType") {
                                return (
                                    <Link to={`/${item.id}`} key={item.id}>

                                        <div key={item.id} className="TravelIndivitual">
                                            <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg} className=" rounded-xl w-40" />
                                            <p className=' font-semibold text-base px'> {item.name} </p>
                                            <p className='text-base font-normal text-center'> ${item.price} </p>
                                        </div>
                                    </Link>
                                )
                            }
                        })}
                    </div>

                </div>
            </div>}





            {show4 && <div className='newContent relative left-72 text-base text-gray-500 top-16' onMouseLeave={dontShowHandler}>
                <div className='newCategoryHold flex flex-col gap-9'>
                    <p className='font-bold text-xl'>  CATEGORY </p>

                    <p>  Brightening Range </p>

                    <p>  Traditional </p>

                    <p>  Jewellery package </p>

                    <p>  Shop All New Arrivals </p>
                </div>

                <div className='newTypeHold relative flex felx-row gap-10'>
                    {store.map((item) => {
                        if (item.type == "navbar-NewType") {
                            return (
                                <Link to={`/${item.id}`} key={item.id}>

                                    <div className='newIndivitual'>
                                        <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg} className=" rounded-xl w-40" />
                                        <p className='font-semibold text-center text-base px'> {item.name} </p>
                                        <p className='text-base font-normal text-center'> ${item.price} </p>
                                    </div>
                                </Link>
                            )
                        }
                    })}
                </div>

            </div>}



        </div>
    )
}

export default Body
