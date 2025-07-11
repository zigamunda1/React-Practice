import { useState } from "react";

function App() {
  // useState 는 가장 기본적인 Hook이며, 함수 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다
  // => 이 함수가 호출되면 배열을 반환한다 => 그 배열의 첫번째 요소는 현재 상태의 값이고, 두번째 요소는 상태를 변경하는 함수이다.
  // useState 함수의 파라미터 에는 상태의 기본값을 넣어준다.

  const [value, setValue] = useState(0);

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeNickname = () => {
    setNickname(event?.target.value);
  };
  return (
    <div>
      <p>
        현재 카운트 값은 <b>{value}</b>
      </p>
      <button onClick={() => setValue(value + 1)}> 1 증가 </button>
      <button onClick={() => setValue(value - 1)}> 1 감소</button>

      <div>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="text" value={nickname} onChange={onChangeNickname} />
      </div>
    </div>
  );
}

export default App;
