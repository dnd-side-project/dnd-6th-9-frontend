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
      <button onClick={handleError}>Click</button>
      <Input {...args} onChange={handleChange} maxLength={10} error={error} />
    </>
  );
};

export const Error = (...args) => {
  return (
    <>
      <Input {...args} error />
    </>
  );
};
