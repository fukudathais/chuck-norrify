
import React, { Component } from 'react';

import './Loading.scss';

class Spinner extends Component {
    render() {
        return (
            <div>
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
};

export default Spinner;