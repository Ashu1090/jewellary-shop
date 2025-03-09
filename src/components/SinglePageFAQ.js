import React from 'react'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'

import aus from "../assets/aus.png";

const SinglePageFAQ = () => {
    return (
        <div>

            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton >
                            <Box flex='1' textAlign='left'>
                                PRODUCT INFO
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    Jewelry, whether crafted from precious metals like gold and silver or adorned with gemstones, has been cherished for its beauty and significance across cultures and time periods. From rings to necklaces, bracelets to earrings, each piece serves as a personal expression of style and sentiment. Beyond mere adornment, jewelry often holds cultural and symbolic meaning, marking milestones like weddings or religious ceremonies. Crafted through intricate artisanal techniques and influenced by ever-evolving fashion trends, jewelry remains a timeless form of self-expression and cherished heirloom, blending artistry with personal identity.

                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                               HISTORY 
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    Throughout history, jewelry has played diverse roles, symbolizing love, spirituality, and societal affiliations. Crafted through meticulous artisanal techniques, jewelry pieces showcase exquisite design, fine craftsmanship, and artistic expression


                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                DESCRIPTION
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    Jewelry encompasses a vast array of ornamental items crafted for personal adornment, often utilizing precious metals, gemstones, and other materials

                    </AccordionPanel>
                </AccordionItem>


                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                BRAND VALUES
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <img src={aus} />
                    </AccordionPanel>
                </AccordionItem>


            </Accordion>
        </div>
    )
}

export default SinglePageFAQ