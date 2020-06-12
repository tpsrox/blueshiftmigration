import React, { Component } from "react";
import StatStack from "./statStack";

class Dashboard extends Component {
  constructor() {
    super();
    var stacks = [
      {
        id: 0,
        hierarchy: this.getHierarchy(0),
        fState: this.getFState(0),
        data: this.getData(0),
        selectedStat: null,
      },
    ];
    this.state = { stacks: stacks };
  }

  getFState = (level) => {
    let fState = {
      isExpanded: true,
      isActive: true,
      collapsedStyles: this.getCollapsedStyles(level, null),
      baseStyles: this.getBaseStyles(level),
      selectedStatStyles: this.getSelectedStatStyles(level),
      innerStatScrollStyle: this.getInnerStatHeight(level),
    };
    return fState;
  };
  getInnerStatHeight = (level) => {
    const windowHeight = window.innerHeight;
    let statHeight = windowHeight - 105 - level * 23;
    return { height: statHeight };
  };
  getSelectedStatStyles = (level) => {
    const bgColor = "#fff";
    const color = "#000";
    return {
      backgroundColor: bgColor,
      color: color,
    };
  };
  getBaseStyles = (level) => {
    const bgColor = "#fff";
    const color = "#000";
    return {
      backgroundColor: bgColor,
      color: color,
      zIndex: level,
      position: "absolute",
      top: level * 23,
      left: level * 50,
      width: "100%",
    };
  };
  getCollapsedStyles = (level, defaultZ) => {
    const bgColors = [
      "#001830",
      "#00254a",
      "#003263",
      "#003e7d",
      "#004b96",
      "#0058b0",
      "#0065c9",
      "#0071e3",
    ];
    const colors = [
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
    ];
    let zInd = defaultZ == null ? level : defaultZ;
    return {
      backgroundColor: bgColors[level],
      color: colors[level],
      top: level * 23,
      left: level * 50,
      position: "absolute",
      zIndex: zInd,
      border: "2px solid " + bgColors[level],
      width: 300,
    };
  };
  getHierarchy = (level) => {
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

  getData = (level) => {
    let organizations = [
      {
        name: "AI Platform",
        total: 100,
        completed: 82,
        contact: "Pardhu Thokala",
        id: 1,
      },
      {
        name: "DevDiv",
        total: 100,
        completed: 12,
        contact: "Alex Goodman",
        id: 2,
      },
      {
        name: "Developer Services",
        total: 100,
        completed: 26,
        contact: "Kenneth Deyoe",
        id: 3,
      },
      {
        name: "Identity",
        total: 100,
        completed: 67,
        contact: "Satish Thakur",
        id: 4,
      },
      {
        name: "Security",
        total: 100,
        completed: 98,
        contact: "Derren Brown",
        id: 5,
      },
      {
        name: "AI Services",
        total: 100,
        completed: 90,
        contact: "David Blaine",
        id: 6,
      },
      {
        name: "AI Platform 2",
        total: 100,
        completed: 99,
        contact: "Milton Erickson",
        id: 7,
      },
      {
        name: "AI Platform 3",
        total: 100,
        completed: 91,
        contact: "Paul Ekman",
        id: 8,
      },
      {
        name: "Developer Services",
        total: 100,
        completed: 26,
        contact: "Kenneth Deyoe",
        id: 9,
      },
      {
        name: "Identity",
        total: 100,
        completed: 67,
        contact: "Satish Thakur",
        id: 10,
      },
      {
        name: "Security",
        total: 100,
        completed: 98,
        contact: "Derren Brown",
        id: 11,
      },
      {
        name: "AI Services",
        total: 100,
        completed: 90,
        contact: "David Blaine",
        id: 12,
      },
      {
        name: "AI Platform 2",
        total: 100,
        completed: 99,
        contact: "Milton Erickson",
        id: 13,
      },
      {
        name: "AI Platform 3",
        total: 100,
        completed: 91,
        contact: "Paul Ekman",
        id: 14,
      },
      {
        name: "AI Services",
        total: 100,
        completed: 90,
        contact: "David Blaine",
        id: 15,
      },
      {
        name: "AI Platform 2",
        total: 100,
        completed: 99,
        contact: "Milton Erickson",
        id: 16,
      },
      {
        name: "AI Platform 3",
        total: 100,
        completed: 91,
        contact: "Paul Ekman",
        id: 17,
      },
      {
        name: "Developer Services",
        total: 100,
        completed: 26,
        contact: "Kenneth Deyoe",
        id: 18,
      },
      {
        name: "Identity",
        total: 100,
        completed: 67,
        contact: "Satish Thakur",
        id: 19,
      },
      {
        name: "Security",
        total: 100,
        completed: 98,
        contact: "Derren Brown",
        id: 20,
      },
      {
        name: "AI Services",
        total: 100,
        completed: 90,
        contact: "David Blaine",
        id: 21,
      },
      {
        name: "AI Platform 2",
        total: 100,
        completed: 99,
        contact: "Milton Erickson",
        id: 22,
      },
      {
        name: "AI Platform 3",
        total: 100,
        completed: 91,
        contact: "Paul Ekman",
        id: 23,
      },
      {
        name: "AI Platform",
        total: 100,
        completed: 82,
        contact: "Pardhu Thokala",
        id: 24,
      },
      {
        name: "DevDiv",
        total: 100,
        completed: 12,
        contact: "Alex Goodman",
        id: 25,
      },
      {
        name: "Developer Services",
        total: 100,
        completed: 26,
        contact: "Kenneth Deyoe",
        id: 26,
      },
      {
        name: "Identity",
        total: 100,
        completed: 67,
        contact: "Satish Thakur",
        id: 27,
      },
      {
        name: "Security",
        total: 100,
        completed: 98,
        contact: "Derren Brown",
        id: 28,
      },
      {
        name: "AI Services",
        total: 100,
        completed: 90,
        contact: "David Blaine",
        id: 29,
      },
      {
        name: "AI Platform 2",
        total: 100,
        completed: 99,
        contact: "Milton Erickson",
        id: 30,
      },
      {
        name: "AI Platform 3",
        total: 100,
        completed: 91,
        contact: "Paul Ekman",
        id: 31,
      },
      {
        name: "Developer Services",
        total: 100,
        completed: 26,
        contact: "Kenneth Deyoe",
        id: 32,
      },
      {
        name: "Identity",
        total: 100,
        completed: 67,
        contact: "Satish Thakur",
        id: 33,
      },
      {
        name: "Security",
        total: 100,
        completed: 98,
        contact: "Derren Brown",
        id: 34,
      },
      {
        name: "AI Services",
        total: 100,
        completed: 90,
        contact: "David Blaine",
        id: 35,
      },
      {
        name: "AI Platform 2",
        total: 100,
        completed: 99,
        contact: "Milton Erickson",
        id: 36,
      },
      {
        name: "AI Platform 3",
        total: 100,
        completed: 91,
        contact: "Paul Ekman",
        id: 37,
      },
      {
        name: "AI Services",
        total: 100,
        completed: 90,
        contact: "David Blaine",
        id: 38,
      },
      {
        name: "AI Platform 2",
        total: 100,
        completed: 99,
        contact: "Milton Erickson",
        id: 39,
      },
      {
        name: "AI Platform 3",
        total: 100,
        completed: 91,
        contact: "Paul Ekman",
        id: 40,
      },
      {
        name: "Developer Services",
        total: 100,
        completed: 26,
        contact: "Kenneth Deyoe",
        id: 41,
      },
      {
        name: "Identity",
        total: 100,
        completed: 67,
        contact: "Satish Thakur",
        id: 42,
      },
      {
        name: "Security",
        total: 100,
        completed: 98,
        contact: "Derren Brown",
        id: 43,
      },
      {
        name: "AI Services",
        total: 100,
        completed: 90,
        contact: "David Blaine",
        id: 44,
      },
      {
        name: "AI Platform 2",
        total: 100,
        completed: 99,
        contact: "Milton Erickson",
        id: 45,
      },
      {
        name: "AI Platform 3",
        total: 100,
        completed: 91,
        contact: "Paul Ekman",
        id: 46,
      },
    ];
    organizations[0].showTitle = true;
    return organizations;
  };
  isStatSelected = (level) => {
    if (this.state.stacks[level].selectedStat) {
      return true;
    }
    return false;
  };
  // handleToggleExpand = (stack) => {
  //   let stacks = [...this.state.stacks];
  //   stacks[stack].fState.isExpanded = true;
  //   this.setState({ stacks: stacks });
  // };
  // handleToggleCollapse = (stack) => {
  //   console.log(stack);
  //   let stacks = [...this.state.stacks];
  //   stacks[stack].fState.isExpanded = false;
  //   this.setState({ stacks: stacks });
  // };
  updateStackExpansion = (level) => {
    let stacks = [...this.state.stacks];
    if (stacks[level].selectedStat) {
      stacks[level].fState.isExpanded = false;
    } else {
      stacks[level].fState.isExpanded = true;
    }
    this.setState({ stacks: stacks });
  };
  updateSelectedStat = (stat, level) => {
    let stacks = [...this.state.stacks];
    if (
      stacks[level].selectedStat == null ||
      !this.isEquivalent(stacks[level].selectedStat, stat)
    ) {
      stacks[level].selectedStat = stat;
    } else {
      stacks[level].selectedStat = null;
    }
    this.setState({ stacks: stacks });
    this.updateStackExpansion(level);
  };
  isExpanded = (level) => {
    return this.state.stacks[level].fState.isExpanded === true;
  };
  createChildStack = (level) => {
    // let stat = { ...this.state.stacks[level].selectedStat };
    let nextLevel = level + 1;
    var newStack = {
      id: nextLevel,
      hierarchy: this.getHierarchy(nextLevel),
      fState: this.getFState(nextLevel),
      data: this.getData(nextLevel),
      selectedStat: null,
    };
    var joined = this.state.stacks.concat(newStack);
    this.setState({ stacks: joined });
    console.log(this.state);
  };
  updateStatBoardOnChange = (level) => {
    // let stacks = [].concat([...this.state.stacks]);
    // stacks.splice(level + 1, stacks.length - (level + 1));
    const newStacks = this.state.stacks.filter((stack) => {
      return stack.id <= level;
    });
    // this.setState({ stacks: stacks });
    this.setState(
      {
        stacks: [...newStacks],
      },
      function () {
        if (this.isStatSelected(level)) {
          this.createChildStack(level);
        }
      }
    );
  };
  handleStatClick = (stat, level) => {
    this.updateSelectedStat(stat, level);
    this.updateStatBoardOnChange(level);
    this.setStackInLineVisually(level);
  };
  handleStackMouseEnter = (stackId) => {
    if (stackId) {
      let stacks = [...this.state.stacks];
      if (!stacks[stackId].fState.isExpanded) {
        stacks[stackId].fState.collapsedStyles = this.getCollapsedStyles(
          stackId,
          stacks.length * 10
        );
        this.setState({ stacks });
      }
    }
  };
  setStackInLineVisually = (stackId) => {
    let stacks = [...this.state.stacks];
    if (!stacks[stackId].fState.isExpanded) {
      stacks[stackId].fState.collapsedStyles = this.getCollapsedStyles(
        stackId,
        stackId
      );
      this.setState({ stacks });
    }
  };
  handleStackMouseLeave = (stackId) => {
    this.setStackInLineVisually(stackId);
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
  render() {
    return (
      <div className="px-3 dashboard-mother">
        {this.state.stacks.map((stack) => (
          <div
            key={stack.id}
            className={stack.fState.isExpanded ? "" : " stack-collapsed"}
            style={
              stack.fState.isExpanded
                ? stack.fState.baseStyles
                : stack.fState.collapsedStyles
            }
            onMouseEnter={() => this.handleStackMouseEnter(stack.id)}
            onMouseLeave={() => this.handleStackMouseLeave(stack.id)}
          >
            {/* <button onClick={() => this.handleToggleExpand(stack.id)}>
              Toggle Expand
            </button>
            <button onClick={() => this.handleToggleCollapse(stack.id)}>
              Toggle collapse
            </button> */}
            <StatStack
              key={stack.id}
              data={stack.data}
              fState={stack.fState}
              hierarchy={stack.hierarchy}
              selectedStatId={
                stack.selectedStat == null ? null : stack.selectedStat.id
              }
              handleClick={this.handleStatClick}
            ></StatStack>
          </div>
        ))}
      </div>
    );
  }
}

export default Dashboard;
