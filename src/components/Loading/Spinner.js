
import React, { Component } from 'react';

import './Loading.scss';

class Spinner extends Component {
    render() {
        return (
            <p>
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </p>
        );
    }
};

export default Spinner;