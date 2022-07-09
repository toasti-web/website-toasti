import * as React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "gatsby";
import { firestore } from "../service/firebase";
import authentication from '../service/firebase';

import SignIn from '../components/signin';
import SignedIn from '../components/signedin';

var writerEmails = [];

const getWriterSnapshot = async () => {
  const writersQuery = firestore.query(firestore.collection(firestore.getFirestore(), 'writers'));
  const writerSnapshot = await firestore.getDocs(writersQuery);
  writerEmails = writerSnapshot.docs.map(doc => doc.data().email);
}

const GetWriters = () => {
    const [writerList, setWriterList] = React.useState([]);
  
    React.useEffect(() => {
  
    if (writerEmails.length === 0) {
      getWriterSnapshot().then(() => {
        setWriterList(writerEmails);
      });
    }
  
  });

  return writerList;
}

const NavBar = () => {
    var currentUser = authentication.currentUser;
    const [user, setUser] = React.useState(currentUser);
    let [userIsWriter, setUserIsWriter] = React.useState(false);

    React.useEffect(() => {
        setUserIsWriter(JSON.parse(window.localStorage.getItem('userIsWriter')));
    }, []);

    React.useEffect(() => {
        window.localStorage.setItem('userIsWriter', userIsWriter);
    }, [userIsWriter]);

    writerEmails = GetWriters();

    React.useEffect(() => {
        authentication.onAuthStateChanged(user => {
        setUser(user);

        if (writerEmails != null) {
            for (var i = 0; i < writerEmails.length; i++) {
                if (user != null && user.email === writerEmails[i]) {
                    setUserIsWriter(true);
                    break;
                } else if (user == null) {
                    setUserIsWriter(false);
                }
            }
        }});
  });

    return <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            {userIsWriter ? <div><SignedIn user={user} /> <Link to="/create-article"><Button>Buat Artikel</Button></Link></div> : <SignIn />}
        </Container>
    </Navbar>
};
 
export default NavBar;