import React, { Component } from "react";
import Stat from "./stat";
import StatHeader from "./statHeader";

class StatStack extends Component {
  state = { isMuted: false };
  toggleMute = () => {
    console.log("handleToggle");
    if (this.state.isMuted === true) {
      this.setState({ isMuted: false });
    } else {
      this.setState({ isMuted: true });
    }
  };
  render() {
    const { hierarchy, data, fullHeader } = this.props;
    const { isMuted } = this.state;
    return (
      <div>
        {fullHeader && (
          <StatHeader
            applyClasses="my-2"
            hierarchy={hierarchy}
            fullHeader={fullHeader}
          ></StatHeader>
        )}
        <div>
          {data != null &&
            data.length > 0 &&
            data.map((stat, i) => (
              <Stat
                key={"key-" + stat.id + "_" + i}
                data={stat}
                hierarchy={hierarchy}
                handleToggleMute={this.toggleMute}
                isMuted={isMuted}
              ></Stat>
            ))}
        </div>
      </div>
    );
  }
}

export default StatStack;
