import './App.scss';
import { useState } from 'react';
import { Reset } from 'styled-reset';

function App(){
  let [item, setItem] = useState(['positive thinking', 'sound mind sound body', 'This too shall pass.', 'The die is cast.'])
  let [data, setData] = useState('')

  let saveData = (e) => {
    setData(e.target.value)
  } // 입력 데이터 저장

  let addItem = () => {
    let copy = [...item]
    copy.push(data)
  } // 추가 버튼

  let sort = () => {
    let copy = [...item];
    copy.sort();
    setItem(copy);
  } // 가나다 순 정렬 버튼


  return (
    <div className="App">
      <Reset />
      <h1>MeMo</h1>
      <div className='box__input'>
        <input type="text" className="input__add" onChange={saveData}/>
        <button type="submit" onClick={addItem} className='btn__add'>🐹</button>
      </div>
      <ul className="box__list">
        {
          item.map((a,i)=>{
            return(
              <li key={i}>
                <input type="checkbox" />
                <p>{a /* = item[i]와 같음 */}</p>
                <button className='btn__edit'>수정</button>
              </li>
            )
          })
        }
      </ul>
      <button onClick={sort}>가나다 순 정렬</button>
    </div>
  );
}

export default App;
