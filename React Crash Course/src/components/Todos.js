import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {

  render(){
    return this.props.todos.map((todo) => (
        // There are three of this since we are passing a size 3 array for the todo list
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo = {this.props.delTodo}/>

    ));
  }
}

/*
Prop Types:
   A validation for properties that a component shoould have
 */
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default Todos;
