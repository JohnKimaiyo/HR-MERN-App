import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './style.css';
export default function Login() {
const[values, setValues]  = useState({
email:'',
password:''

})





  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"    onchange={e =>setValues({...values,email:e.target.value})}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"    onchange={e =>setValues({...values,password:e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
