import { Button } from '@components/base';
export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = () => {
  return (
    <>
      <Button type={'primary'} disabled={false}>
        Button
      </Button>

      <Button type={'primary'} disabled={true}>
        Button
      </Button>

      <Button type={'secondary'} disabled={false}>
        Button
      </Button>
      <Button type={'secondary'} disabled={true}>
        Button
      </Button>

      <Button type={'danger'} disabled={false}>
        Button
      </Button>
      <Button type={'danger'} disabled={true}>
        Button
      </Button>

      <Button type={'select'} disabled={false}>
        Button
      </Button>
      <Button type={'select'} disabled={true}>
        Button
      </Button>
    </>
  );
};
