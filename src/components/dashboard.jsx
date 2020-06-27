import React, { Component } from "react";
import StatStack from "./statStack";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

class Dashboard extends Component {
  constructor() {
    super();
    let stack = {
      id: 0,
      hierarchy: this.getHierarchy(0),
      sort: this.getSort(0),
      data: [],
    };
    let clouds = this.getJEDIClouds();
    this.state = {
      stack: stack,
      clouds: clouds,
    };
    this.state.selectedClouds = this.getSelectedClouds();
  }
  getJEDIClouds = () => {
    return [
      { name: "USSec", isSelected: true },
      { name: "USNat", isSelected: false },
      { name: "Public", isSelected: false },
      { name: "Fairfax", isSelected: false },
    ];
  };
  getHierarchy = (level) => {
    const hierarchy = [
      { name: "Organization", level: 0 },
      { name: "Service Groups", level: 1 },
      { name: "Service Team", level: 2 },
      { name: "Jobs", level: 3 },
    ];
    return hierarchy[level];
  };
  getSort = (level) => {
    var sort = {};
  };
  componentDidMount = () => {
    this.getData();
  };
  getData = () => {
    fetch(
      "http://blueshiftmigrationapi.azurewebsites.net/api/dashboard/getorganizations",
      {
        method: "GET",
        rejectUnauthorized: false,
      }
    )
      .then((response) => response.json())
      .then((response) => {
        let stack = {
          id: 0,
          hierarchy: this.getHierarchy(0),
          data: response,
        };
        this.setState({ stack: stack }, function () {});
      })
      .catch((err) => {
        console.log(err);
      });

    // axios
    //   .get(`https://localhost:44312/api/dashboard/getorganizations`)
    //   .then((res) => {
    //     console.log(res);
    //   });
  };

  isEquivalent = (a, b) => {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
      return false;
    }

    for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];

      // If values of same property are not equal,
      // objects are not equivalent
      if (a[propName] !== b[propName]) {
        return false;
      }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
  };
  changeSelectedCloud = (cloud) => {
    console.log(cloud);
    let clouds = [...this.state.clouds];
    let cloudIndex = clouds.indexOf(cloud);
    clouds[cloudIndex] = { ...cloud };
    if (cloud.isSelected == true) {
      clouds[cloudIndex].isSelected = false;
    } else {
      clouds[cloudIndex].isSelected = true;
    }
    var selectedClouds = clouds
      .filter((c) => {
        if (c.isSelected == true) {
          return true;
        }
        return false;
      })
      .map((cl) => {
        return cl.name;
      })
      .join(", ");
    this.setState(
      { clouds: clouds, selectedClouds: selectedClouds },
      function () {
        console.log(this.state);
      }
    );
  };
  getSelectedClouds = () => {
    var str = this.state.clouds
      .filter((c) => {
        if (c.isSelected == true) {
          return true;
        }
        return false;
      })
      .map((cl) => {
        return cl.name;
      })
      .join(", ");
    return str;
  };
  render() {
    return (
      <div className="px-0">
        <Navbar className="justify-content-end">
          <div>
            <div>Migration Status in Cloud</div>
            <Dropdown as={ButtonGroup} className="btn-light">
              <Dropdown.Toggle
                id="ddl-dashboard-clouds"
                className="btn btn-theme"
              >
                {this.state.selectedClouds}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {this.state.clouds.map((cloud) => (
                  <Dropdown.Item
                    key={cloud.name}
                    className={
                      "ddm-clouds-item " + cloud.isSelected == true
                        ? "selected"
                        : ""
                    }
                    onClick={() => this.changeSelectedCloud(cloud)}
                  >
                    {cloud.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>{" "}
          </div>
        </Navbar>

        {this.state.stack.data.length > 0 && (
          <div className="mt-2 border-all">
            <StatStack
              key={this.state.stack.id}
              data={this.state.stack.data}
              hierarchy={this.state.stack.hierarchy}
              fullHeader={true}
            ></StatStack>
          </div>
        )}
      </div>
    );
  }
}

export default Dashboard;
