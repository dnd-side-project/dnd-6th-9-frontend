import { Image } from '@components/base';

export default {
  title: 'Components/Image',
  component: Image,
};

export const Default = () => {
  return (
    <Image
      width={300}
      height={300}
      src={
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMjRfMjQw%2FMDAxNjQwMzE1MTU2MDc0.GglpFISwXt8FI0q5HOB2_LXMzuxrxTJGwY7L9S5c6bkg.8NhCd9rYd99TzQ6z7Ci_SFB4O320ypfJZwG2nhuUI1gg.JPEG.bodysoap708%2F2debd8bf8ea759fca63922bbfd3a034a.jpg&type=a340'
      }
      alt={'IU'}
      mode={'contain'}
    />
  );
};
