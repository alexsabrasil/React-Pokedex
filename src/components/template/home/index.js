import { Autocomplete, Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Caterpie from './caterpie.png'
import api from '../../../services/api'
import Logo from './poke.png'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FormatColorResetIcon from '@mui/icons-material/FormatColorReset';
import SearchIcon from '@mui/icons-material/Search';
import PetsIcon from '@mui/icons-material/Pets';
import './index.css'

function Home() {
    // Esta lista sera preenchida pela requisição
    const [list, setList] = useState([]);
    const [inputValue, setValueInput] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        navigate(`/pokemon/${inputValue}`,);
    }

    // Chamando a função toda vez que o componente renderizar
    useEffect(() => {
        // Executar após essa requisição ser concluida, trazendo o data
        api.get().then(({ data }) => {
            const listData = data.results.map((item) => ({ ...item, label: item.name }))

            setList(listData)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Box className='header'>
                <img
                    src={Logo}
                    alt="Pokemon-Logo"
                    width="14%"
                />

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: "55%",
                        p: 1,
                        mr: 1,
                        borderRadius: 1,
                    }}
                    component="form"
                    onSubmit={handleSubmit}
                    className="searchBox"
                >
                    <Typography variant="h6" style={{ color: 'white' }}>
                        Pesquisar:
                    </Typography>

                    <Autocomplete
                        id="combo-box-demo"
                        options={list}
                        sx={{ width: '50ch' }}
                        onChange={(e, newEvent) => setValueInput(newEvent.name || '')}
                        renderInput={(params) =>
                            <TextField
                                id="filled-basic"
                                label="Pesquise por seu pokémon favorito"
                                variant="standard"
                                {...params}
                                InputLabelProps={{
                                    style: { color: 'white' },
                                }}
                                sx={{
                                    width: '50ch',
                                }}
                            />}
                    />

                    <Button
                        variant="contained"
                        type="submit"
                        sx={{
                            backgroundColor: 'black',
                            '& svg': {
                                fill: '#',
                            },
                        }}
                    >
                        <SearchIcon />
                    </Button>
                </Box>

            </Box>

            <div className='home'>
                <div className='body'>
                    <div className="div1">
                        <h2>Caterpie</h2>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <Button
                                variant="contained"
                                color="error"
                                className='buttons'
                                startIcon={<PetsIcon />}
                            >
                                Categoria: Lagarta
                            </Button>
                            <Button
                                variant="contained"
                                color="error"
                                className='buttons'
                                startIcon={<LocalFireDepartmentIcon />}
                                sx={{
                                    mt: 1,
                                }}
                            >

                                Origem do nome: Caterpie
                            </Button>
                            <Button
                                variant="contained"
                                color="error"
                                className='buttons'
                                startIcon={<FormatColorResetIcon />}
                                sx={{
                                    mt: 1,
                                }}
                            >
                                Habilidade: Auto-cura efeitos ruins
                            </Button>

                            <Paper
                                sx={{
                                    bgcolor: 'transparent',
                                    borderRadius: 5,
                                }}
                                className="paper"
                            >
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    component="div"
                                    sx={{
                                        m: 7,
                                    }}
                                    className='subTitulo'
                                >
                                    Quando está pronto, Caterpie entra em processo de metamorfose e evolui para Metapod. Nesse estágio, ele fica completamente inerte, acumulando energia para o estágio final de sua evolução. Ele é todo verde e tem uma casca dura e resistente.
                                </Typography>
                            </Paper>
                        </Box>

                    </div>

                    <div className="div2">
                        <img
                            src={Caterpie}
                            alt="Pokemon-Logo"
                            width="90%"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home