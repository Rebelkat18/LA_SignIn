import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function SignIn() {
    return (
        <div className='container'>
            <div className="d-flex justify-content-center">
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridStudentID">
                        <Form.Label>Student ID</Form.Label>
                        <Form.Control placeholder="0000000" />
                    </Form.Group>

                    <Form.Group className="mb-3" id="formGridClass">
                        <Form.Select aria-label="Default select example">
                            <option>Select your class from the dropdown</option>
                            <option value="1">MATH 119</option>
                            <option value="2">MATH 119A</option>
                            <option value="3">MATH 236</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId="formGridTimeIn">
                        <Form.Label>Time In</Form.Label>
                        <Form.Control type="time" />
                    </Form.Group>

                    <div className="d-flex justify-content-center">
                        <Form.Group className='mb-3' controlId="formGridAthelete">
                            <Form.Label>Athelete?</Form.Label>
                            <Form.Check type="radio" label="Yes" />
                            <Form.Check type="radio" label="No" checked />
                        </Form.Group>
                    </div>

                    <div className="d-flex justify-content-center">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default SignIn;