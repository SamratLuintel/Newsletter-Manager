import React from "react";
import classNames from "classnames";

const TodoListItem = props => {
  const iconClasses = classNames({
    "TodoListItem__media-image__icon": true,
    "TodoListItem__media-image__icon--grey ": props.incomplete
  });

  const tickIconClasses = classNames({
    "TodoListItem__media-image__icon__todo-tick": true,
    "TodoListItem__media-image__icon__todo-tick--disable": props.incomplete
  });

  const bodyTextClasses = classNames({
    "TodoListItem__media-body__text": true,
    "TodoList__media-body__text--grey": !props.incomplete,
    "TodoListItem__media-body__text--black": props.incomplete
  });
  return (
    <div className="TodoListItem">
      <div className="TodoListItem__media-image">
        <div className={iconClasses}>
          <div className={tickIconClasses}>
            <i class="fas fa-check" />
          </div>
        </div>
      </div>
      <div className="TodoListItem__media-body">
        <h2 className={bodyTextClasses}>{props.text}</h2>
      </div>
    </div>
  );
};

export default TodoListItem;
