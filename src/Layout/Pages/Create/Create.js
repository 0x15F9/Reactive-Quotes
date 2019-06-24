import React, { Component } from 'react';

import CreateWizard from './CreateWizard/CreateWizard'
import GetQuote from './GetQuote/GetQuote'

class Create extends Component {
    state = {
        quote: "test"
    }
    render() {
        return(
            <div>
                <CreateWizard />
                <GetQuote {...this.state} />
            </div>
        );
    }
}

export default Create;