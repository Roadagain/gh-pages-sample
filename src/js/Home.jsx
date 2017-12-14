import React from 'react';
import Top from './Top';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Home extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <Top />
                    </Col>
                </Row>
            </Grid>
        );
    }
}
