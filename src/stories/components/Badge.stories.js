import { Badge } from '@components/base';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    count: { defaultValue: 10, control: 'number' },
    maxCount: { defaultValue: 100, control: 'number' },
    showZero: { defaultValue: true, control: 'boolean' },
  },
};

export const Default = (args) => (
  <Badge {...args}>
    <img
      src="https://picsum.photos/60"
      style={{ width: '60px', borderRadius: 8 }}
    />
  </Badge>
);

export const Dot = () => {
  return (
    <Badge dot>
      <img src="https://picsum.photos/60" style={{ width: '40px' }} />
    </Badge>
  );
};
