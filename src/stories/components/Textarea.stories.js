import { Textarea } from '@components/base';
import { useState } from 'react';
export default {
  title: 'Components/Textarea',
  component: Textarea,
};

export const Default = () => {
  const [value, setValue] = useState('');
  const handleChange = (value) => {
    const { text, error } = value;
    if (!error) setValue(text);
  };
  return <Textarea value={value} onChange={handleChange} maxLength={30} />;
};

export const Long = () => {
  const [value, setValue] = useState('');
  const handleChange = (value) => {
    const { text, error } = value;
    if (!error) setValue(text);
  };
  return <Textarea value={value} onChange={handleChange} maxLength={500} />;
};
