import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import StatStack from "./statStack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

class Stat extends Component {
  state = {
    isSelected: false,
    children: [],
    childHierarchy: null,
    isLoading: false,
  };
  getRequestURI = () => {
    switch (this.props.hierarchy.level) {
      case 0:
        return (
          "http://blueshiftmigrationapi.azurewebsites.net/api/dashboard/getservicegroups?organizationid=" +
          this.props.data.Id
        );
      case 1:
        return (
          "http://blueshiftmigrationapi.azurewebsites.net/api/dashboard/getserviceteams?servicegroupid=" +
          this.props.data.Id
        );
      case 2:
        return (
          "http://blueshiftmigrationapi.azurewebsites.net/api/dashboard/getjobs?serviceteamid=" +
          this.props.data.Id
        );
      default:
        break;
    }
  };
  getChildData = () => {
    let reqUri = this.getRequestURI();
    this.setState({ isLoading: true });
    fetch(reqUri, {
      method: "GET",
      rejectUnauthorized: false,
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        this.setState({ childData: response }, function () {
          this.setState({ isLoading: false });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getPercentCompleted = () => {
    if (this.props.data.Total == 0) {
      return 0;
    }
    const percentCompleted =
      (this.props.data.Completed / this.props.data.Total) * 100;
    return percentCompleted;
  };
  getDueDate = () => {
    if (this.props.hierarchy.level >= 2) {
      return "08/20/2020";
    }
  };
  setSelected = (val) => {
    if (val == null) {
      return "incorrect input";
    }
    if (val === true) {
      let childHierarchy = this.getChildHierarchy(
        this.props.hierarchy.level + 1
      );

      this.getChildData();

      this.setState({
        isSelected: true,
        childData: [],
        childHierarchy: childHierarchy,
      });
    } else {
      this.setState({ isSelected: false, childHierarchy: null });
    }
    return "done";
  };
  handleClick = () => {
    if (this.props.hierarchy.level > 2) {
      return;
    }
    if (this.state.isSelected === true) {
      this.setSelected(false);
    } else {
      this.setSelected(true);
    }
    this.props.handleToggleMute();
  };
  getChildHierarchy = (level) => {
    const hierarchyNames = [
      "Organization",
      "Service Groups",
      "Service Level",
      "Service Team",
      "Jobs",
    ];
    let cHierarchy = {
      level: level,
      name: hierarchyNames[level],
      shortName: hierarchyNames[level],
    };
    return cHierarchy;
  };
  getStyles = (level, defaultZ) => {
    // const bgColors = [
    //   "#e6e6e6",
    //   "#ebebeb",
    //   "#f0f0f0",
    //   "#f5f5f5",
    //   "#fafafa",
    //   "#fcfcfc",
    //   "#ffffff",
    // ];
    return {
      backgroundColor: "#fff",
      color: "#000",
    };
    // if (this.props.isMuted) {
    //   return {
    //     backgroundColor: bgColors[level],
    //     color: "#000",
    //   };
    // } else {
    //   return {
    //     backgroundColor: "#fff",
    //     color: "#000",
    //   };
    // }
  };
  getContact = () => {
    try {
      var json = JSON.parse(this.props.data.Contact);
      var contact = json.join(", ");
      return contact;
    } catch {
      return this.props.data.Contact;
    }
  };
  render() {
    const { Name, Total, Completed, Contact, ChildrenCount } = this.props.data;
    const { level } = this.props.hierarchy;
    const { data, isMuted } = this.props;
    const { isSelected, childData, childHierarchy } = this.state;
    const { handleClick } = this;
    return (
      <Container
        fluid
        className="px-0 stat-container"
        // style={isMuted ? this.getStyles(level) : this.getStyles(level)}
      >
        <Row noGutters={true} className="stat-row">
          <Col
            className={"col-3 stat-name px-2 cursor-pointer flex"}
            onClick={handleClick}
          >
            {Array(level)
              .fill()
              .map((v, i) => (
                <div key={i} className="tree-spacer">
                  ___
                </div>
              ))}
            <div className="stat-name-block">
              {isSelected && level <= 2 && (
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="mr-1 stat-arrow-icons"
                />
              )}
              {!isSelected && level <= 2 && (
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="mr-1 stat-arrow-icons"
                />
              )}
              {level > 2 && <div className="tree-spacer">___</div>}
              <span className="stat-name-text">{Name}</span>
              {level <= 2 && <span>({ChildrenCount})</span>}
              {this.state.isLoading && <div className="sp sp-wave"></div>}
            </div>
          </Col>
          <Col className="stat-graph px-1">
            {this.props.hierarchy.level <= 2 && (
              <ProgressBar
                now={this.getPercentCompleted()}
                label={`${this.getPercentCompleted()}%`}
              />
            )}
            {this.props.hierarchy.level == 3 && <span>N/A</span>}
          </Col>
          <Col className="stat-total px-1">{this.getDueDate()}</Col>
          <Col className="stat-total px-1">{Total}</Col>
          <Col className="stat-remaining px-1">
            {this.props.hierarchy.level <= 2 && (
              <span>{Total - Completed}</span>
            )}
            {this.props.hierarchy.level == 3 && <span>N/A</span>}
          </Col>
          <Col className="stat-contact px-1">{this.getContact()}</Col>
        </Row>
        <Row>
          <Col className="col-12">
            {isSelected && childHierarchy != null && (
              <StatStack
                data={childData}
                hierarchy={childHierarchy}
                fullHeader={false}
              ></StatStack>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Stat;
