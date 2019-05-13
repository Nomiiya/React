import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
  render(){
    return this.props.todos.map((todo) => (
        // There are three of this since we are passing a size 3 array for the todo list

        <TodoItem key={todo.id} todo={todo} />
    ));
  }
}

/*
Prop Types:
   A validation for properties that a component shoould have
 */
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
