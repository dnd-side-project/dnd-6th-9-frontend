import { Input } from '@components/base';
import { useState } from 'react';
export default {
  title: 'Components/Input',
  component: Input,
};

export const Default = (...args) => {
  const [error, setError] = useState(false);
  const handleChange = ({ value }) => {
    if (value) console.log(value);
  };
  const handleError = () => {
    setError((prev) => !prev);
  };

  return (
    <>
      <button onClick={handleError}>Error 버튼</button>
      <Input {...args} onChange={handleChange} maxLength={10} error={error} />
    </>
  );
};

export const None = (...args) => {
  const [error, setError] = useState(false);
  const handleChange = ({ value }) => {
    if (value) console.log(value);
  };
  const handleError = () => {
    setError((prev) => !prev);
  };

  return (
    <>
      <button onClick={handleError}>Error 버튼</button>
      <Input {...args} onChange={handleChange} error={error} />
    </>
  );
};
