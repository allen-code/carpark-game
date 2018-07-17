import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { CarComponent } from '../components'
import { GridComponent } from '../components'

class GridWrapper extends Component {
    render() {
        return (
                <Row className="show-grid" md={8} sm={12}>
                    <Col>
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                    </Col>
                    <Col>
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                    </Col>
                    <Col>
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                    </Col>
                    <Col>
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                    </Col>
                    <Col>
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                    </Col>
                    <CarComponent 
                        face={this.props.face} 
                        position={this.props.position} 
                    />
                </Row>
        )
    }
}

export default GridWrapper