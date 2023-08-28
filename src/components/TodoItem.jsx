function TodoItem(props){
  return(
    <li>
      <span>v {props.completed}</span>
      <p>{props.action}</p>
      <span>x</span>
    </li>
  );
}

export {TodoItem};