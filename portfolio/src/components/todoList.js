import { useState } from 'react'
import Create from './todoCreate'
import Item from './todoItem'

function List(){
  const [input, setInput] = useState('');
  const [list, setList] = useState(['Initial List', 'test']);

  const handleSubmit = (updated, index) => {
    const newList = [...list];
    newList[index] = updated;
    setList(newList)
  };
  
  const handleAdd = (e) => {
    e.preventDefault();
    if(input.trim() !== ''){
      setList([...list, input]);
      setInput('');
    }
  }
  // 투두 등록

  return(
    <div className='todoListBox'>
      <ul>
        {list.map((data, i) => (
          <li key={i} className='listItem'>
            <Item data={data} list={list} setList={setList} handleSubmit={handleSubmit} index={i}></Item>
          </li>
        ))}
      </ul>
      <Create input={input} setInput={setInput} handleSubmit={handleAdd}/>
    </div>
  )
}

export default List;