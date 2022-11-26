import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row } from 'react-bootstrap';

function DataEntryForm({ addData }) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !age || !email) return;
        addData(name, age, email);
        setName('');
        setAge('');
        setEmail('');
    }

    return (
        <div>

            <Container className='mt-5 mb-5'>
                <Row xs={2}>
                    <Card className='p-4 shadow bg-body rounded'>
                        <Form onSubmit={handleSubmit} className='d-grid'>
                            <h5 className='display-5 mb-3'>Add a New User</h5>
                            <Form.Group>
                                <Form.Control type="text" className="input mb-3" value={name} onChange={e => setName(e.target.value)} placeholder="User Name" />
                                <Form.Control type="number" className="input mb-3" value={age} onChange={e => setAge(e.target.value)} placeholder="User Age" />
                                <Form.Control type="email" className="input mb-3" value={email} onChange={e => setEmail(e.target.value)} placeholder="User Email" />
                            </Form.Group>
                            <Button variant="primary mb-2" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card>
                </Row>
            </Container>

        </div>
    );
}


export default DataEntryForm;