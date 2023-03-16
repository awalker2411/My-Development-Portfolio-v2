import React from 'react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Phone from '../../assets/phone.gif'


export default function cMe() {
    return (
        <main style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                <img src={Phone} style={{height: '20vw'}} id="me" alt="Landa point at phone; Inglorious Basterds"></img>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Card style={{display: 'flex', justifyContent: 'center', backgroundColor: "black", color: 'white', marginTop: 100}} sx={{ maxWidth: 700 }}>
                    <Box sx={{ p: 2 }}>
                        <h2 className='text-center fs-1'>Need to Contact Me?</h2>
                        <Typography className='text-center' style={{marginTop: 20}}>
                            <a className="fs-2" href="mailto: awalker2411@yahoo.com">EMAIL</a>
                            <br></br>
                            <br></br>
                            <a className="fs-2" href="https://github.com/awalker2411">GITHUB</a>
                        </Typography>
                    </Box>
                </Card>
            </div>
        </main>
    )
}