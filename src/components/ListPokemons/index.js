import './index.css'
import api from '../../services/api'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

function ListPokemons() {
    // Nossa lista que sera preenchida pela requisição
    const [list, setList] = useState([]);

    // Chamando nossa função toda vez que o componente renderizar
    useEffect(() => {
        // Executar após essa requisição ser concluida, nos trazendo o data
        api.get().then(({ data }) => {
            setList(data.results)

        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className='content'>
                <Typography variant="h2" gutterBottom className='titulo'>
                    Selecione o seu favorito
                </Typography>
                {list.map((item) => (
                    <Button
                        variant="contained"
                        key={item.name}
                        size="small"
                        sx={{ m: 1, backgroundColor: 'black', color: 'pink' }}
                    >
                        <Link to={"/pokemon/" + item.name} style={{ textDecoration: 'none' }}>
                            <p className="pokemonsName" style={{ color: 'pink' }}>
                                {item.name}
                            </p>
                        </Link>
                    </Button>
                ))}
            </div>
        </>
    )
}

export default ListPokemons