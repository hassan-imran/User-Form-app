import React from 'react';
import Alert from 'react-bootstrap/Alert';

function Error({show, setShow}) {

    if (show) {
        return (
            <Alert className='' variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Email already exists</Alert.Heading>
                <p>Please make sure to not repeat emails already in the User Database.</p>
            </Alert>
        );
    }
    return "";
}

export default Error;