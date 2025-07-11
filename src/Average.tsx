const getAverage = (numbers: number[]) => {
  console.log("Calculating average...");

  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, cur) => acc + cur);
  return sum / numbers.length;
};

function Average() {
  return (
    <div>
      <input type="text" value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>

      <ul>
        {list.map((value: number, index: number) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
}

export default Average;
