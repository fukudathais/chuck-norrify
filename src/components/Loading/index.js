import React from 'react';

import Spinner from './Spinner';

function Loading(Component) {
    return function LoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return (<Component {...props} />);
        return (
            <Spinner />
        );
    }
}

export default Loading;