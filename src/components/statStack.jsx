import React, { Component } from "react";
import Stat from "./stat";
import StatHeader from "./statHeader";

class StatStack extends Component {
  state = {};
  render() {
    const { fState, hierarchy, data, handleClick, selectedStatId } = this.props;
    const { isExpanded } = this.props.fState;
    return (
      <div>
        <StatHeader
          applyClasses="my-2"
          hierarchy={hierarchy}
          fState={fState}
        ></StatHeader>
        <div className="scroll" style={fState.innerStatScrollStyle}>
          {data.map((stat) => (
            <Stat
              key={stat.id}
              data={stat}
              hierarchy={hierarchy}
              fState={fState}
              isSelected={stat.id === selectedStatId}
              handleClick={(statRet) => handleClick(statRet, hierarchy.level)}
            ></Stat>
          ))}
        </div>
      </div>
    );
  }
}

export default StatStack;
