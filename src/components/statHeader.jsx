import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class StatHeader extends Component {
  state = {};

  constructor(props) {
    super(props);
  }
  isExpanded = () => {
    return this.props.fState.isExpanded === true;
  };

  getLevel = () => {
    return this.props.hierarchy.level;
  };
  getHierarchy = () => {
    return this.props.hierarchy.name;
  };
  render() {
    return (
      <Container fluid className="px-0 pt-0 pb-1">
        <Row noGutters={true}>
          <Col className="stat-name px-1">
            <div>
              <span className="badge badge-warning ">
                {this.getHierarchy()}(L{this.getLevel()})
              </span>
            </div>
          </Col>
          {this.isExpanded() && (
            <React.Fragment>
              <Col className="stat-graph px-1">
                <div>
                  <span className="badge badge-warning ">% Completed</span>
                </div>
              </Col>
              <Col className="stat-total px-1">
                <div>
                  <span className="badge badge-warning">Total</span>
                </div>
              </Col>
              <Col className="stat-remaining px-1">
                <div>
                  <span className="badge badge-warning">Remaining</span>
                </div>
              </Col>
              <Col className="stat-contact px-1">
                <div>
                  <span className="badge badge-warning">Contact</span>
                </div>
              </Col>
            </React.Fragment>
          )}
        </Row>
      </Container>
    );
  }
}

export default StatHeader;
