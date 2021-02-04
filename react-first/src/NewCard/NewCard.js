import React from 'react';
import './NewCard.css';


export default class NewCard extends React.Component{
    state={
        isOpen:false
    }
    render(){
        return(
            <React.Fragment>
                <button onClick={() => this.setState({isOpen: true})}>Open modal</button>

                {this.state.isOpen&&
                <div className='new-card'>
                    <div className='new-card-body'>
                        <h1>Modal title</h1>
                        <p>Modal</p>
                        <button onClick={() => this.setState({isOpen: false})}>Close modal</button>
                    </div>
                </div>}
            </React.Fragment>
        )
    }
}