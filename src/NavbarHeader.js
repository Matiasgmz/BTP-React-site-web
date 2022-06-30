import './index.css';
import { InputGroup, FormControl, Row, Col, Text, Navbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faSearch, faSignOut } from '@fortawesome/free-solid-svg-icons';


function NavbarHeader() {

    return (
        <div>
            <Navbar expand="lg" fixed="top" bg="dark" className="px-3 justify-content-between">

                <Col xs="12" sm="4" md="4" lg="4">
                    <InputGroup>
                        <FormControl
                            placeholder="Rechercher...."
                            className="gap-2"
                        />
                        <Button><FontAwesomeIcon className="text-light" icon={faSearch} /></Button>
                    </InputGroup>
                </Col>

                <Col xs="12" sm="6" md="4" lg="3" className="px-1 text-sm-end text-center mt-2">
                    <Navbar.Text className="text-light ms-2">Bonjour, Matias</Navbar.Text>
                    
                    <Button className="btn-dark">
                        <FontAwesomeIcon className="text-light" icon={faGear} />
                    </Button>

                    <Button className="btn-dark">
                        <FontAwesomeIcon className="text-light " icon={faSignOut} />
                    </Button>
                </Col>

            </Navbar>

        </div>
    );
}

export default NavbarHeader;