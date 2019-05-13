import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import { connect } from 'react-redux'

class TodoItem extends Component {

    getStyle = () => {
        return{
            background: '#f3f3f3',
            padding: '10px',
            textDecoration: this.props.todo.completed ? 
            'line-through'  : 'none'
        }
    }

    render() {
    return (
      <div style = {this.getStyle()}>
        <p>{ this.props.todo.title }</p>
      </div>
    )
  }
}
//export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


export default TodoItem;

// rce + press tab