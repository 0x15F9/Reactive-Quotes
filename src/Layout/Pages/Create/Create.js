import React, { Component } from 'react';

import CreateWizard from './CreateWizard/CreateWizard'
import GetQuote from './GetQuote/GetQuote'

class Create extends Component {
    state = {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts."
    }

    updateQuote = (event) => {
        this.setState({...this.state, quote: event.target.value});
    }

    render() {
        return(
            <div>
                <CreateWizard />
                <GetQuote {...this.state} updateQuote={this.updateQuote}/>
            </div>
        );
    }
}

export default Create;