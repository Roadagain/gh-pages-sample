import React from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';

export default class Top extends React.Component {
    render() {
        return (
            <Grid><Row>
                <Col>
                    <Jumbotron>
                        <h1>gh-pages-sample</h1>
                        <p>
                            GitHub Pagesのサンプルです。
                            <code>package.json</code>をパクるとそれなりのReact+Bootstrap環境が生えます
                        </p>
                    </Jumbotron>
                </Col>
            </Row></Grid>
        );
    }
}
