import Head from 'next/head'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import styles from '../styles/Home.module.css'
import { Button } from 'react-bootstrap';
import Column from 'react-bootstrap/Col';

// Jane


import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default  function Layout() {
  return (
    <>
      <Container fluid="md">
    <h2 className={styles.pagesection} id="layout">Layout</h2>
    <p>For the layout of Electrify,
       we will mainly use grid and flexbox to create the layout of the website.
    </p>
    
    </Container>
    <h4>Layout for homepage</h4>
    <Form>
      <Column gap={3} className="mt-9">
        <Col>
          <Form.Control placeholder="EV Knowledges" />
        </Col>
        <Col>
          <Form.Control placeholder="Watch Videos" />
        </Col>
        <Col>
          <Form.Control placeholder="EV brands" />
        </Col>
        <Col>
          <Form.Control placeholder="Locations" />
        </Col>
      </Column>
    </Form>
   
    <Form>
    
    <h4>Here is example of 1 answer questions</h4>
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Radios
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="first radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="second radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="third radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>
      </fieldset>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
        <Button type="submit" className='border border-#3B8D95' style={{ backgroundColor:"#3B8D95"}}>Next</Button>
        </Col>
      </Form.Group>
      <h4>Here is example of Multiple answer questions</h4>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
      <Form.Label as="legend" column sm={2}>
            Multiple checkboxes
          </Form.Label>
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Answer 1 " />
          <Form.Check label="Answer 2 " />
          <Form.Check label="Answer 3 " />
        </Col>
      </Form.Group>
      

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit" className='border border-#3B8D95' style={{ backgroundColor:"#3B8D95"}}>Next</Button>
        </Col>
      </Form.Group>
    </Form>
    </>

  );
}

