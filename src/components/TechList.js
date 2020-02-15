import React, { Component } from 'react';

class TechList extends Component {

  state = {
    techs: [
      'Node.JS',
      'ReactJS',
      'React-Native'
    ]
  };

  render() {
    return (
      <ul>
        {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
      </ul>
    )
  }
}

export default TechList;