import React from 'react';
import "../styles/JournalPage.css"
import hair from "../assets/hair.jpeg";
import better from "../assets/better.jpeg";
import { FaShippingFast } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import JournalPageFooter from './JournalPageFooter';

const JournalPage = () => {
  return (<div className='journalPageMainParent-1'>
    <div className='journalPageMainParent'>
      <p className='sjText'> THE JEWELLERY </p>

      <div className='paraHold absolute'>
        <p className='text-center'> Jewelry encompasses a vast array of ornamental items crafted for personal adornment, often utilizing precious metals, gemstones, and other materials
          Explore it all.
        </p>
      </div>

      <p className='fof text-3xl font-medium text-center absolute aprilBlogHeading'> Our VS jewellers provide jewellery with low cost and good quality </p>

      <div className='hairImgHold'>
        <img src="https://www.jcsjewellers.com/cdn/shop/collections/Silver-Necklace_1920x.jpg?v=1657794949" className="hairImg" alt='hey' />
      </div>

      <div className='jhold flex flex-col absolute'>

        <p> From intricate rings and necklaces to elegant bracelets and earrings, jewelry serves as a reflection of individual taste, cultural heritage, and social status. Throughout history, jewelry has played diverse roles, symbolizing love, spirituality, and societal affiliations. Crafted through meticulous artisanal techniques, jewelry pieces showcase exquisite design, fine craftsmanship, and artistic expression. Whether worn for special occasions or everyday elegance, jewelry remains a timeless form of self-expression and a treasured aspect of human culture.
        </p>


        <p>     <li className='text-left mb-3 fof text-xl '> Rings </li> 
Rings are circular bands worn on fingers, serving both decorative and symbolic purposes. They come in various styles, materials, and designs, ranging from simple bands to elaborate pieces adorned with gemstones or intricate engravings. Rings hold diverse meanings across cultures and contexts, often symbolizing love, commitment, friendship, or social status. Common types of rings include engagement rings, wedding bands, promise rings, and decorative fashion rings. Whether worn as a fashion statement or as a symbol of significant life events, rings hold a special place in human culture and personal expression.

        </p>



        <p>   <li className='text-left mb-3 fof text-xl '> Chains </li>  
Chains are versatile accessories consisting of links joined together to form a flexible and continuous length. They come in various lengths, widths, and designs, ranging from delicate and dainty to bold and chunky. Chains can be made from a variety of materials, including precious metals like gold and silver, as well as stainless steel, brass, or even leather. They are commonly worn around the neck as necklaces or pendants, but can also be used as bracelets or anklets. Chains offer endless opportunities for personalization, allowing individuals to express their style and personality through different lengths, textures, and embellishments. Whether worn alone for a minimalist look or layered for a statement effect, chains are timeless accessories that add elegance and versatility to any outfit. </p>



        <p>   <li className='text-left mb-3 fof text-xl '> Necklace </li> 
A necklace is a piece of jewelry worn around the neck, typically consisting of a chain or cord with one or more decorative elements attached. These decorative elements can include pendants, charms, gemstones, beads, or intricate designs crafted from various materials such as precious metals, gemstones, pearls, or beads. Necklaces come in a wide range of styles, lengths, and designs, catering to diverse tastes and occasions.

        </p>

      </div>



      <div className='footerFeatures3 flex flex-row absolute'>
        <FaShippingFast className=' w-24 h-20 widthHeight' />
        <FaLock className='w-14 h-16 widthHeight' />
        <BsCurrencyDollar className='w-24 h-20 widthHeight' />
        <img src={better} className="w-20 widthHeight" alt='hey' />
      </div>

      <div className='footerFeatures3TextHold fof flex flex-row absolute uppercase'>
        <p> 2 DAY DELIVERY </p>
        <p> secure checkout </p>
        <p> royalty points </p>
        <p> easy returns </p>
      </div>

      <div className='jfHold absolute'>
        <JournalPageFooter />
      </div>


    </div>
  </div>
  )
}

export default JournalPage