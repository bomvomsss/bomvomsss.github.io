import { useState } from 'react'
import Create from './todoCreate'

function List(){
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.trim() !== ''){
      setList([...list, input]);
      setInput('');
    }
  };
  // 투두 등록

  const handleDelete = (i) => {
    const newList = [...list];
    newList.splice(i, 1);
    setList(newList);
  }
  // 투두 삭제

  const initialItems = [
    {
      id : 1, 
      content : '책상 청소',
      done : 'true' 
    },
    { id : 2, content : '플레이리스트 바꾸기', done : 'true' },
    { id : 3, content : '어제 공부한 거 복습하기', done : 'false' },
    { id : 4, content : '책 읽기', done : 'false' },
  ]

  return(
    <div className='todoListBox'>
      <ul>
        {list.map((item, i) => (
          <li key={i} className='listItem'>
            <label>
              <input type="checkbox" />
              <span className='checkIcon'></span>
              <span className='box__txt'>{item}</span>
            </label>
            <button type='button' className='btn__del' onClick={()=>handleDelete(i)}>삭제</button>
          </li>
        ))}
      </ul>
      <Create input={input} setInput={setInput} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default List;