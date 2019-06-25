import React from 'react';
import Logo from '../img/YuGluLogo.PNG'

export default class YuGluMast extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <img className="YuGluLogo" src={Logo}></img>
        )
    }
}