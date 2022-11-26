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

        userList.forEach((x) => {
            if (x.email.toLowerCase() == email.toLowerCase()) {
                // console.log('duplicate');
                setShow(true);
                checkUnique = false;
                return;
            }
        })



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
                <Error show={show} setShow={setShow} />
                <DataEntryForm addData={addData} />
                <DataTable userList={userList} />
            </Container>


        </div>
    );
}

export default App;