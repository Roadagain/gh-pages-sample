import React from 'react';
import Navigation from './Navigation';
import Top from './Top';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <Top />
            </div>
        );
    }
}
