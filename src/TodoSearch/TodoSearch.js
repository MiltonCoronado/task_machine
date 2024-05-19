import './TodoSearch.css';

const TodoSearch = ({ searchValue, setSearchValue, loading }) => {
  return (
    <input
      placeholder='Busca Tu TODO...'
      className='TodoSearch'
      value={searchValue}
      disabled={loading}
      onChange={event => {
        setSearchValue(event.target.value)//La unica forma que se renderize en el html los nuevos valores son atra vez del estado, asi funciona REACT*** 
      }}
    />
  )
};

export { TodoSearch };
 