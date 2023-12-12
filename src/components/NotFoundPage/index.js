import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Ghost from './ghost.png'
import './index.css'

function NotFoundPage() {
    return (
        <Box className="notFoundPage">
            <>
                <Typography variant='h3' className='title'>
                    Ops! Perdeu o caminho? 
                </Typography>
                <Typography variant='h6' className='title'>
                    <Link to={"/"}>
                        Clique AQUI e recomece a sua jornada!
                    </Link>
                </Typography>
            </>
            

            <img src={Ghost} width="420rem" alt='Fantasma de óculos'/>
        </Box>
    )
}

export default NotFoundPage