import { Button } from '@components/base';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = () => {
  return (
    <>
      <Button type={'PRIMARY'} size={'M'} disabled={false}>
        Button
      </Button>

      <Button type={'PRIMARY'} size={'L'} disabled={false}>
        Button
      </Button>

      <Button type={'PRIMARY'} size={'L'} disabled={true}>
        Button
      </Button>

      <Button type={'SECONDARY'} size={'M'} disabled={false}>
        Button
      </Button>
      <Button type={'SECONDARY'} size={'L'} disabled={false}>
        Button
      </Button>
      <Button type={'SECONDARY'} size={'L'} disabled={true}>
        Button
      </Button>

      <Button type={'DANGER'} size={'M'} disabled={false}>
        Button
      </Button>
      <Button type={'DANGER'} size={'L'} disabled={false}>
        Button
      </Button>
      <Button type={'DANGER'} size={'L'} disabled={true}>
        Button
      </Button>

      <Button type={'SELECT'} size={'M'} disabled={false}>
        Button
      </Button>
      <Button type={'SELECT'} size={'L'} disabled={false}>
        Button
      </Button>
      <Button type={'SELECT'} size={'L'} disabled={true}>
        Button
      </Button>
    </>
  );
};
