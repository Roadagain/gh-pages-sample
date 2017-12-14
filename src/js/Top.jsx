import React from 'react';
import { Grid, Row, Col, Jumbotron, PageHeader } from 'react-bootstrap';

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
                <Col>
                    <PageHeader>GitHub Pages</PageHeader>
                    <p>GitHub Pagesを使うと、静的なWebページを無料で公開できます。</p>
                </Col>
            </Row></Grid>
        );
    }
}
