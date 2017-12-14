import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Home extends React.Component {
    render() {
        return (
            <Jumbotron>
                <h1>gh-pages-sample</h1>
                <p>
                    GitHub Pagesのサンプルです。
                    <code>package.json</code>をパクるとそれなりのReact+Bootstrap環境が生えます
                </p>
            </Jumbotron>
        );
    }
}
