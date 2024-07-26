import { useState, useRef } from 'react'
import Create from './todoCreate'
import todoData from '../data.js'

function List(){
  const [input, setInput] = useState('');
  const [list, setList] = useState([...todoData]);
  const [isEditing, setIsEditing] = useState(false);
  const [editCont, setEditCont] = useState(todoData.content);
  const [done, setDone] = useState(false);

  const idNum = useRef(3);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id : idNum.current++, // 1씩 증가
      content : input,
      done : false,
    };
    if(input.trim() !== ''){
      setList((prev) => [...prev, newTodo]);
      setInput('');
      console.log(newTodo.id)
    }
  };
  // 투두 등록

  const handleDelete = (i) => {
    const newList = [...list];
    newList.splice(i, 1);
    setList(newList);
  }
  // 투두 삭제

  const handleEdit = (e) => {
    setEditCont(e.target.value)
  }


  if(isEditing){
    return(
      <div className='todoListBox'>
        <ul>
          {list.map((data, i) => (
            <li key={data.id} className='listItem'>
              <label>
                <input type="checkbox" value={editCont} onChange={handleEdit()} autofocus/>{' '}
                <span className='box__txt'>{data.content}</span>
              </label>
              <div className="box__btn">
                <button type='button' className='btn__edit' onClick={()=>setIsEditing(false)}>수정</button>
                <button type='button' className='btn__del' onClick={()=>handleDelete(i)}>삭제</button>
              </div>
            </li>
          ))}
        </ul>
        <Create input={input} setInput={setInput} handleSubmit={handleSubmit}/>
      </div>
    )
  }else{
    return(
      <div className='todoListBox'>
        <ul>
          {list.map((data, i) => (
            <li key={data.id} className='listItem'>
              <label>
                <input type="checkbox" onChange={()=>handleEdit()} autofocus/>
                <span className={'box__txt'}>{data.content}</span>
              </label>
              <div className="box__btn">
                <button type='button' className='btn__edit' onClick={()=>setIsEditing(true)}>수정</button>
                <button type='button' className='btn__del' onClick={()=>handleDelete(i)}>삭제</button>
              </div>
            </li>
          ))}
        </ul>
        <Create input={input} setInput={setInput} handleSubmit={handleSubmit}/>
      </div>
    )
  }

  }

export default List;