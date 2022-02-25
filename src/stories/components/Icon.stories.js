import { Icon } from '@components/base';
import plus from '@assets/icons/plus.svg';

export default {
  title: 'Components/Icon',
  component: Icon,
};

export const Default = () => {
  return <Icon src={plus} width={24} height={24} />;
};
