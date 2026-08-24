import { useState } from "react";

// 1. 제네릭(Generic) 타입
interface Box<T> {
  item: T;
}

// 사용할 때 타입을 넣어줌
let stringBox: Box<string> = {
  item: "문자열을 담은 상자",
};

let numberBox: Box<number> = {
  item: 12345,
};

// 2. 제네릭을 사용하는 Props
interface SelectBoxProps<T> {
  options: T[];                 // 선택 가능한 목록
  selectValue: T;               // 현재 선택된 값
  onChange: (value: T) => void; // 값이 바뀌면 실행되는 함수
}

// 3. 문자열만 받을 수 있도록 제약 조건
function SelectBox<T extends string>({
  options,
  selectValue,
  onChange,
}: SelectBoxProps<T>) {
  return (
    <select
      value={selectValue}
      onChange={(e) => {
        const value = options.find((opt) => opt === e.target.value);

        if (value !== undefined) {
          onChange(value);
        }
      }}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

// 4. 사용하는 컴포넌트
export default function SelectBoxDemo() {
  const fruits = ["사과", "바나나", "딸기", "멜론", "복숭아"];

  const [selected, setSelected] = useState<string>(fruits[0]);

  return (
    <div>
      <hr />

      <p>선택된 과일 : {selected}</p>

      <SelectBox
        options={fruits}
        selectValue={selected}
        onChange={setSelected}
      />
    </div>
  );
}