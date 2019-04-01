
import React from 'react';

class Group extends React.Component {

  componentDidMount() {
    console.log('Here there should come an api call.');
  }
  
  render() {
    console.log(this.props);
    return (
      <h1> { this.props.match.params.groupName } </h1>
    )
  }

}


export default Group;
