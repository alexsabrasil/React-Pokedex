import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Ghost from './ghost.png'
import './index.css'

function NotFoundPage() {
    return (
        <Box className="notFoundPage">
            <>
                <Typography variant='h2' className='title'>
                    Procurando fantasmas ? Página errada !
                </Typography>
                <Typography variant='h6' className='title'>
                    <Link to={"/"}>
                        Redirecionar para home !
                    </Link>
                </Typography>
            </>
            

            <img src={Ghost} width="500rem" alt='Fantasma'/>
        </Box>
    )
}

export default NotFoundPage