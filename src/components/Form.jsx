import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
function MyForm(props) {
    const [Text,SetText]=useState("")
    const [Letters,SetLetters]=useState(0)
    const [Words,SetWords]=useState(0)
    const HandleChange = (e) => {
        const newText = e.target.value;
        SetText(newText);

        const NumOfLetter = newText.length;
        const NumOfWords = newText.trim() === "" ? 0 : newText.trim().split(/\s+/).length;

        SetLetters(NumOfLetter);
        SetWords(NumOfWords);
    };

    const HandleUpCase=()=>{
        SetText(Text.toUpperCase())
    }
    const HandleLoCase=()=>{
        SetText(Text.toLowerCase())
    }
    const HandleClear=()=>{
        SetText("")
        SetLetters(0)
        SetWords(0)
    }
    return (
        <>
            <Container className={props.Mode === "dark" ? "label-white" : "label-black"}>
                <Form>    
                    <Form.Group className="mb-3 my-5" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>{props.heading}</Form.Label>
                        <Form.Control as="textarea" rows={10} onChange={HandleChange} value={Text} className={props.Mode === "dark" ? "textbox-dark" : "textbox-light"}/>
                    </Form.Group>
                </Form>
                <Button variant="primary" onClick={HandleUpCase}>Change to UpperCase</Button>
                <Button variant="primary" onClick={HandleLoCase} className='mx-3'>Change to LowerCase</Button>
                <Button variant="primary" onClick={HandleClear} >Clear Text</Button>
                <h1 className='my-4'>Summary</h1>
                <p>Number Of Letters : {Letters}</p>
                <p>Number Of Words : {Words}</p>
                <h1 className='my-4'>Preview</h1>
                <p>{Text}</p>
            </Container>
        </>
    );
}
export default MyForm;