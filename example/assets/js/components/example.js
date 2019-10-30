import React from 'react'


class Example extends React.Component {
    constructor(props){
        super(props);
        console.log('El componente fue creado')
    }
    componentDidMount(){
        console.log('El componente fue montado')
    }
    render(){
        return(<div></div>)
    }
}

export default Example;