
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2'


function Buton(){

    function saludar(){
        Swal.fire({
            title: 'Hola mundo!',
            text: '"HOLa mundO!!"',
            type: 'success',
            confirmButtonText: 'Ok'
        })
    }


    return (
        <Button variant="contained" color="primary" onClick={saludar} >
            Hola Mundo
        </Button>
    )
}

export default Buton;