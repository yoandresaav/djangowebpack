import React from 'react'
import Saludo from './Saludo'
import Buton from './buton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Example from './example'

const App = () => {
    return(
        <React.Fragment>
            <CssBaseline />
            <div style={{ margin:50, padding: 20, backgroundColor: '#cfe8fc', height: '100vh' }}>
                <Grid container >
                    <div>
                        <h2>Hola desde reactjs HAHAHA Yoandre con el watch!</h2>
                        <Saludo />
                        <Buton />
                        <Example />
                    </div>
                </Grid>
            </div>
        </React.Fragment>
    )
}

export default App;