import { Input } from '@components/base';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Default = (...args) => {
  return <Input {...args} />;
};

export const Error = (...args) => {
  return <Input {...args} error />;
};
