import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
function MyNav(props) {
  const handleSwitchChange = (e) => {
    const checked = e.target.checked; // true if switch is ON, false if OFF
    if (checked) {
      props.setMode("dark");
    }
    else{
      props.setMode("light")
    }
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg={props.Mode} data-bs-theme={props.Mode}>
      <Container>
        <Navbar.Brand href="#home">Text-Utility</Navbar.Brand>
        
        <Form>
          <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            label=" Mode"
            className={props.Mode === "dark" ? "label-white" : "label-black"}
            onChange={handleSwitchChange}
          />
        </Form>
      </Container>
    </Navbar>
  );
}

export default MyNav;