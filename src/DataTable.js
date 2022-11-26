import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';


function DataTable({ userList }) {
    return (
        <div>
            <Card className='p-4 shadow bg-body rounded'>
                <h5 className='display-5 mb-3'>User Database</h5>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // A map function to return the rows of the table
                            userList.map((user, key) => (
                                <tr key={key}>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                        {user.age}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Card>
        </div>
    );
}

export default DataTable;