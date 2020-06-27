import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";

class StatHeader extends Component {
  state = {
    sortField: "none",
    sortDirection: "none",
  };

  constructor(props) {
    super(props);
  }

  getHierarchy = () => {
    return this.props.hierarchy.name;
  };
  handleSort = (sortField) => {
    console.log(sortField);
    if (this.state.sortField === sortField) {
      let newSortDir = "";
      switch (this.state.sortDirection) {
        case "asc":
          newSortDir = "desc";
          break;
        case "desc":
          newSortDir = "asc";
          break;
        default:
          newSortDir = "asc";
          break;
      }
      this.setState({ sortDirection: newSortDir });
    } else {
      this.setState({ sortField: sortField, sortDirection: "asc" });
    }
  };
  render() {
    const { fullHeader } = this.props;
    const { level } = this.props.hierarchy;
    const containerClasses =
      "px-0 pt-0  text-weight-bold " +
      (this.props.fullHeader == true ? "theme-color " : "");
    return (
      <Container fluid className={containerClasses}>
        <Row className="stat-row-header" noGutters={true}>
          <Col className={"flex col-3 stat-name px-1"}>
            {Array(level)
              .fill()
              .map((v, i) => (
                <div key={i} className="tree-spacer"></div>
              ))}
            <div
              onClick={() => this.handleSort("name")}
              className="cursor-pointer"
            >
              <span className={fullHeader == true ? " " : "header-title"}>
                {this.getHierarchy()}
              </span>
              {this.state.sortField === "name" &&
                this.state.sortDirection === "asc" && (
                  <FontAwesomeIcon
                    icon={faLongArrowAltUp}
                    className="mx-1 sort-icon"
                    onClick={() => this.handleSort("name")}
                  />
                )}
              {this.state.sortField === "name" &&
                this.state.sortDirection === "desc" && (
                  <FontAwesomeIcon
                    icon={faLongArrowAltDown}
                    className="mx-1 sort-icon"
                    onClick={() => this.handleSort("name")}
                  />
                )}
            </div>
          </Col>
          {fullHeader && (
            <React.Fragment>
              <Col className="stat-graph px-1">
                <div
                  onClick={() => this.handleSort("%completed")}
                  className="cursor-pointer"
                >
                  <span className=" ">% Completed</span>
                  {this.state.sortField === "%completed" &&
                    this.state.sortDirection === "asc" && (
                      <FontAwesomeIcon
                        icon={faLongArrowAltUp}
                        className="mx-1 sort-icon"
                        onClick={() => this.handleSort("%completed")}
                      />
                    )}
                  {this.state.sortField === "%completed" &&
                    this.state.sortDirection === "desc" && (
                      <FontAwesomeIcon
                        icon={faLongArrowAltDown}
                        className="mx-1 sort-icon"
                        onClick={() => this.handleSort("%completed")}
                      />
                    )}
                </div>
              </Col>
              <Col className="stat-graph px-1">
                <div>
                  <span className=" ">Due Date</span>
                </div>
              </Col>
              <Col className="stat-total px-1">
                <div>
                  <span className="">Total</span>
                </div>
              </Col>
              <Col className="stat-remaining px-1">
                <div
                  onClick={() => this.handleSort("remaining")}
                  className="cursor-pointer"
                >
                  <span className="">Remaining</span>
                  {this.state.sortField === "remaining" &&
                    this.state.sortDirection === "asc" && (
                      <FontAwesomeIcon
                        icon={faLongArrowAltUp}
                        className="mx-1 sort-icon"
                        onClick={() => this.handleSort("remaining")}
                      />
                    )}
                  {this.state.sortField === "remaining" &&
                    this.state.sortDirection === "desc" && (
                      <FontAwesomeIcon
                        icon={faLongArrowAltDown}
                        className="mx-1 sort-icon"
                        onClick={() => this.handleSort("remaining")}
                      />
                    )}
                </div>
              </Col>
              <Col className="stat-contact px-1">
                <div>
                  <span className="">Contact</span>
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
