import React, { useState } from 'react';
import DataEntryForm from './DataEntryForm';
import DataTable from './DataTable';
import Error from './Error';
import Container from 'react-bootstrap/Container';

function App() {

    const [userList, setUserList] = useState([]);
    const [show, setShow] = useState(false);

    const addData = (name, age, email) => {

        let checkUnique = true;

        //a loop to check if the entered email is a duplicate

        userList.forEach((x) => {
            if (x.email.toLowerCase() == email.toLowerCase()) {
                setShow(true);
                checkUnique = false;
                return;
            }
        })

        // if checkUnique is true, publish changes to the state i.e. add the user

        if (checkUnique) {
            const newUserList = [...userList, { name, age, email }];
            setUserList(newUserList)
        }
        console.log(checkUnique);
    }

    return (
        <div>
            <Container>
                <h1 className='display-1 mt-5'>User Data</h1>
                <hr />

                {/*
                The Error component here is used to display a flag.
                Also passing a "show" boolean that we maintain in the app component so other functions can also access it
                */}
                <Error show={show} setShow={setShow} />
                

                {/* Passing a function which can be called from inside the child to update the state */}
                <DataEntryForm addData={addData} />
                <DataTable userList={userList} />
            </Container>
        </div>
    );
}

export default App;