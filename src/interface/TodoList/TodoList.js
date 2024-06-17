import './TodoList.css';

const TodoList = (props) => {
  return (
    <ul className='TodoList'>

      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmtySearchResults(props.searchText)}

      {(!props.loading && !props.error) && props.searchedTodos.map((todos) => props.render(todos))}
      
    </ul>
  )
};

export { TodoList };
//tanto que uso !== es ridiculo que no sepa describir lo que hace (ver valores truly && falsy) ver short circuit.