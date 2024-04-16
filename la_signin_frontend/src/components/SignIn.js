import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import axios from 'axios';

function SignIn() {
    //Form States
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [studentID, setStudentID] = useState('');
    const [classID, setClassID] = useState('');
    const [timeIn, setTimeIn] = useState('');
    const [athlete, setAthlete] = useState(false);

    //Form Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted');
        console.log(firstName, lastName, studentID, classID, timeIn, athlete);
        // axios.post('http://localhost:5000/api/signin', {
        //     firstName: firstName,
        //     lastName: lastName,
        //     studentID: studentID,
        //     classID: classID,
        //     timeIn: timeIn,
        //     athlete: athlete
        // }).then((response) => {
        //     console.log(response);
        // }).catch((error) => {
        //     console.log(error);
        // });
    }

    return (
        <div className='container'>
            <div className="d-flex justify-content-center">
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridStudentID">
                        <Form.Label>Student ID</Form.Label>
                        <Form.Control placeholder="0000000" onChange={(e) => setStudentID(e.target.value)} value={studentID} />
                    </Form.Group>

                    <Form.Group className="mb-3" id="formGridClass">
                        <Form.Select aria-label="Default select example" onChange={(e) => setClassID(e.target.value)} value={classID}>
                            <option>Select your class from the dropdown</option>
                            <option value="1">MATH 119</option>
                            <option value="2">MATH 119A</option>
                            <option value="3">MATH 236</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId="formGridTimeIn">
                        <Form.Label>Time In</Form.Label>
                        <Form.Control type="time" onChange={(e) => setTimeIn(e.target.value)} value={timeIn} />
                    </Form.Group>


                    <Form.Group className='mb-3' controlId="formGridAthelete">
                        <Form.Select aria-label="Default select example" onChange={(e) => setAthlete(e.target.value)} value={athlete}>
                            <option>Are you an athelete?</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Form.Select>
                    </Form.Group>


                    <div className="d-flex justify-content-center">
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default SignIn;