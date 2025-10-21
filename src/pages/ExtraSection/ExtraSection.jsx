import React, { useState } from 'react'
import {
    Box,
    Typography,
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { FaQuestionCircle, FaInfoCircle } from 'react-icons/fa'

const ExtraSection = () => {
    const [expanded, setExpanded] = useState(false)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <div className='container mx-auto py-8 px-4'>
            <div className='text-center'>
                <h3 className='text-[32px] md:text-[42px] text-[#1565C0] font-bold mb-4'> Food Expiry Management Guide</h3>
                <h6 className='text-[#666] mb-10 text-xl'>Essential information and tips to help you manage food expiry dates, storage, and safety</h6>
            </div>

            <div className='space-y-8'>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            background: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)',
                            borderRadius: '15px',
                            p: 4,
                            height: '100%',
                            boxShadow: '0 8px 20px rgba(255, 152, 0, 0.15)',
                            border: '2px solid #FFB74D'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 3,
                                color: '#E65100'
                            }}
                        >
                            <FaQuestionCircle style={{ fontSize: '2.5rem', marginRight: '1rem' }} />
                            <Typography
                                variant="h4"
                                component="h2"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#E65100'
                                }}
                            >
                                Food Safety FAQ
                            </Typography>
                        </Box>
                        <Box sx={{ '& .MuiAccordion-root': { mb: 2, borderRadius: '8px !important' } }}>
                            <Accordion
                                expanded={expanded === 'panel1'}
                                onChange={handleChange('panel1')}
                                sx={{
                                    background: 'rgba(255, 255, 255, 0.7)',
                                    '&:before': { display: 'none' }
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    sx={{
                                        '& .MuiAccordionSummary-content': {
                                            color: '#E65100',
                                            fontWeight: 'bold'
                                        }
                                    }}
                                >
                                    How can I tell if food is still safe to eat after its expiry date?
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Check for these signs of spoilage: <br />
                                        • Unusual odors or smells <br />
                                        • Changes in color or texture <br />
                                        • Mold growth <br />
                                        • Slimy or sticky surfaces <br />
                                        When in doubt, it's safer to discard the item.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion
                                expanded={expanded === 'panel2'}
                                onChange={handleChange('panel2')}
                                sx={{
                                    background: 'rgba(255, 255, 255, 0.7)',
                                    '&:before': { display: 'none' }
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    sx={{
                                        '& .MuiAccordionSummary-content': {
                                            color: '#E65100',
                                            fontWeight: 'bold'
                                        }
                                    }}
                                >
                                    What's the difference between "Best Before" and "Use By" dates?
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        • "Best Before" dates indicate quality - food may still be safe to eat after this date <br />
                                        • "Use By" dates are about safety - food should not be consumed after this date <br />
                                        • "Sell By" dates are for retailers, not consumers
                                        Always follow "Use By" dates strictly for safety.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion
                                expanded={expanded === 'panel3'}
                                onChange={handleChange('panel3')}
                                sx={{
                                    background: 'rgba(255, 255, 255, 0.7)',
                                    '&:before': { display: 'none' }
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    sx={{
                                        '& .MuiAccordionSummary-content': {
                                            color: '#E65100',
                                            fontWeight: 'bold'
                                        }
                                    }}
                                >
                                    How can I extend the shelf life of perishable items?
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        • Store in proper airtight containers <br />
                                        • Maintain correct refrigerator temperature (below 40°F/4°C) <br />
                                        • Use the first-in-first-out (FIFO) method <br />
                                        • Freeze items before they expire <br />
                                        • Keep your fridge clean and organized
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
                            borderRadius: '15px',
                            p: 4,
                            height: '100%',
                            boxShadow: '0 8px 20px rgba(76, 175, 80, 0.15)',
                            border: '2px solid #A5D6A7'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 3,
                                color: '#2E7D32'
                            }}
                        >
                            <FaInfoCircle style={{ fontSize: '2.5rem', marginRight: '1rem' }} />
                            <Typography
                                variant="h4"
                                component="h2"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#2E7D32'
                                }}
                            >
                                Storage Tips
                            </Typography>
                        </Box>
                        <Box sx={{ '& .MuiAccordion-root': { mb: 2, borderRadius: '8px !important' } }}>
                            <Accordion
                                expanded={expanded === 'panel4'}
                                onChange={handleChange('panel4')}
                                sx={{
                                    background: 'rgba(255, 255, 255, 0.7)',
                                    '&:before': { display: 'none' }
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    sx={{
                                        '& .MuiAccordionSummary-content': {
                                            color: '#2E7D32',
                                            fontWeight: 'bold'
                                        }
                                    }}
                                >
                                    What's the best way to organize my fridge?
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        • Bottom shelf: Raw meats and fish <br />
                                        • Middle shelf: Dairy products and eggs <br />
                                        • Top shelf: Ready-to-eat foods and leftovers <br />
                                        • Crisper drawers: Fruits and vegetables <br />
                                        • Door: Condiments and drinks <br />
                                        This organization prevents cross-contamination.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion
                                expanded={expanded === 'panel5'}
                                onChange={handleChange('panel5')}
                                sx={{
                                    background: 'rgba(255, 255, 255, 0.7)',
                                    '&:before': { display: 'none' }
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    sx={{
                                        '& .MuiAccordionSummary-content': {
                                            color: '#2E7D32',
                                            fontWeight: 'bold'
                                        }
                                    }}
                                >
                                    How long can I keep leftovers in the fridge?
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        • Cooked meat and poultry: 3-4 days <br />
                                        • Soups and stews: 3-4 days <br />
                                        • Cooked vegetables: 3-5 days <br />
                                        • Rice and pasta: 3-5 days <br />
                                        • Pizza: 3-4 days <br />
                                        Always reheat thoroughly to 165°F (74°C) before eating.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion
                                expanded={expanded === 'panel6'}
                                onChange={handleChange('panel6')}
                                sx={{
                                    background: 'rgba(255, 255, 255, 0.7)',
                                    '&:before': { display: 'none' }
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    sx={{
                                        '& .MuiAccordionSummary-content': {
                                            color: '#2E7D32',
                                            fontWeight: 'bold'
                                        }
                                    }}
                                >
                                    What are the best freezing practices?
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        • Freeze food before expiry date <br />
                                        • Use airtight containers or freezer bags <br />
                                        • Label with date and contents <br />
                                        • Remove excess air from bags <br />
                                        • Most foods last 3-6 months in freezer <br />
                                        • Thaw in refrigerator, not at room temperature
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </Box>
                </Grid>
            </div>
        </div>
    )
}

export default ExtraSection
