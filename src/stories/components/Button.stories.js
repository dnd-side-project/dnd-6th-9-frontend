import { Button } from '@components/base';
export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = () => {
  return (
    <>
      <Button type={'primary'} size={'m'} disabled={false}>
        Button
      </Button>

      <Button type={'primary'} size={'l'} disabled={false}>
        Button
      </Button>

      <Button type={'primary'} size={'l'} disabled={true}>
        Button
      </Button>

      <Button type={'secondary'} size={'m'} disabled={false}>
        Button
      </Button>
      <Button type={'secondary'} size={'l'} disabled={false}>
        Button
      </Button>
      <Button type={'secondary'} size={'l'} disabled={true}>
        Button
      </Button>

      <Button type={'danger'} size={'m'} disabled={false}>
        Button
      </Button>
      <Button type={'danger'} size={'l'} disabled={false}>
        Button
      </Button>
      <Button type={'danger'} size={'l'} disabled={true}>
        Button
      </Button>

      <Button type={'select'} size={'m'} disabled={false}>
        Button
      </Button>
      <Button type={'select'} size={'l'} disabled={false}>
        Button
      </Button>
      <Button type={'select'} size={'l'} disabled={true}>
        Button
      </Button>
    </>
  );
};
