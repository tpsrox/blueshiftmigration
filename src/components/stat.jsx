import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";

class Stat extends Component {
  state = {};
  getPercentCompleted = () => {
    const percentCompleted =
      (this.props.data.completed / this.props.data.total) * 100;
    return percentCompleted;
  };

  render() {
    const { name, total, completed, contact } = this.props.data;
    const { isExpanded } = this.props.fState;
    const { level } = this.props.hierarchy;
    const { fState, data, isSelected, handleClick } = this.props;
    return (
      <Container
        fluid
        className="px-0"
        style={isSelected ? fState.selectedStatStyles : {}}
      >
        <Row noGutters={true} className="stat-row">
          <Col
            className="stat-name px-2 cursor-pointer"
            onClick={() => handleClick(data)}
          >
            <div>
              {name} (L{level})
            </div>
          </Col>

          {isExpanded && (
            <React.Fragment>
              <Col className="stat-graph px-1">
                <ProgressBar
                  now={this.getPercentCompleted()}
                  label={`${this.getPercentCompleted()}%`}
                />
              </Col>
              <Col className="stat-total px-1">{total}</Col>
              <Col className="stat-remaining px-1">{total - completed}</Col>
              <Col className="stat-contact px-1">{contact}</Col>
            </React.Fragment>
          )}
        </Row>
        {isExpanded && <Row></Row>}
      </Container>
    );
  }
}

export default Stat;
