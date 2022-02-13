import { useState } from 'react';
import { Checkbox } from '@components/base';
export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

const DUMMY_DATA = [
  {
    id: '1',
    name: '사과',
  },
  {
    id: '2',
    name: '바나나',
  },
  {
    id: '3',
    name: '딸기',
  },
];

export const Default = () => <Checkbox labelText={'사과'} />;

export const Multiform = () => {
  const [selectItem, setSelectItem] = useState('');
  const renderCheckbox = (item) =>
    item.map((fruit) => (
      <Checkbox
        onChange={handleChange}
        name={fruit.name}
        labelText={fruit.name}
        key={fruit.id}
      />
    ));

  const handleChange = (value) => {
    const { name, checked } = value;
    setSelectItem(`${name}을 ${checked ? '선택' : '취소'}하였습니다.`);
  };

  return (
    <>
      {renderCheckbox(DUMMY_DATA)}
      {selectItem && <span>{selectItem}</span>}
    </>
  );
};
