import React from 'react';

export default class TodoHeader extends React.Component {
  render(){
    return (
        <thead>
          <tr>
            <th>Tasks</th>
            <th className="right">Actions</th>
          </tr>
        </thead>
    )
  }
}