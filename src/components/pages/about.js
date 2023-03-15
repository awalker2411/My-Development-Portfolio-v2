import React from 'react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import me from '../../assets/anthonyWalker.png'


export default function AboutMe() {
    return (
        <main style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                <img src={me} style={{height: '20vw'}} id="me" alt="Pencil sketch of Anthony Walker"></img>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Card style={{display: 'flex', justifyContent: 'center', backgroundColor: "black", color: 'white', marginTop: 100}} sx={{ maxWidth: 700 }}>
                    <Box sx={{ p: 2 }}>
                        <h2 className='text-center'>About Me</h2>
                        <Typography className='text-center' style={{marginTop: 20}}>
                            Good day! My name is Anthony Walker and I am an aspiring web developer! I'm 27 years old and located in Livonia, Michigan. While having taken some college courses, I struggled to find a career path that was suitable for me. From education courses, to engineering, to accounting; nothing seemed to stick. However, over the past couple of years (Thanks Covid!), I've had plenty of time to reevalute my interests and passions during lockdowns. 
                            <br />
                            <br />
                            Now that I'm finishing up with this web development bookcamp, I can truly say that I've found a passion in coding! While I can certainly excel at styling a web page, I've really come to love working with JavaScript and all the awesome ways to write it! I can't wait to put my coding chops into action as I embark on the next step of my web development journey!
                        </Typography>
                    </Box>
                </Card>
            </div>
        </main>
    )
}



