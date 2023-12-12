import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import Pikachu from './pikachu.png'
import './index.css'

function Footer() {
    return(
        <Box className="footer">
            <Box 
                className="leftSide"
            >
                <img src={Pikachu} width="70%" className="image" alt="Imagem de um coelho"/>
            </Box>

            <Box className="rigthSide">
                <Typography 
                    sx={{
                        mt: 2,
                        fontSize: 42,
                        textAlign: 'center'
                    }}
                    className="footerTitle"
                >
                    Developer Alexsa Tavares
                </Typography>

                <img
                    src="https://i.im.ge/2023/12/12/EPF2nh.mulher-grisalho-pet.jpg"
                    alt='Imagem da desenvolvedora'
                    width="300px"
                    className="devImage"
                />

                <Typography 
                    sx={{
                        mt: 2,
                        fontSize: 18,
                        textAlign: 'center'
                    }}
                    className="footerTitle"
                >
                    <a href="https://github.com/alexsabrasil/React-Pokedex" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon /> Repository    
                    </a>
                </Typography>

                <Typography 
                    sx={{
                        mt: 1,
                        fontSize: 18,
                        textAlign: 'center'
                    }}
                    className="footerTitle"
                >
                    <a href="https://www.linkedin.com/in/alexsatecnolog/" target="_blank" rel="noreferrer">
                        <LinkedInIcon /> Professional Network
                    </a>
                </Typography>

                <Typography 
                    sx={{
                        mt: 1,
                        fontSize: 18,
                        textAlign: 'center'
                    }}
                    className="footerTitle"
                >
                    <a href="https://pokeapi.co/" target="_blank">
                        <ArticleIcon /> Doc PokeAPI
                    </a>{" "}
                    <a href="https://mui.com/" target="_blank">
                        <ArticleIcon /> Doc Material-UI
                    </a>

                </Typography>
                
                


                
            </Box>
        </Box>
    )
}

export default Footer