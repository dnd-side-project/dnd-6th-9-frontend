import { Image } from '@components/base';

export default {
  title: 'Components/Image',
  component: Image,
};

export const Default = () => {
  return (
    <Image
      src={
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5544%2F2021%2F08%2F17%2F0000780211_002_20210817224238827.png&type=l340_165'
      }
      alt={'민초'}
      mode={'container'}
    />
  );
};
