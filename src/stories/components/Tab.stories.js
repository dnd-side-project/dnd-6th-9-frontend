import { Tab } from '@components/base';
import { Image } from '@components/base';

const DUMMY_DATA_ME = [
  <Image
    key={1}
    width={164}
    height={191}
    src={'https://cdn.pixabay.com/photo/2022/01/18/07/38/cat-6946505__340.jpg'}
    alt={'Cat1'}
    mode={'contain'}
  />,
  <Image
    key={2}
    width={164}
    height={191}
    src={'https://cdn.pixabay.com/photo/2022/01/18/07/38/cat-6946505__340.jpg'}
    alt={'Cat1'}
    mode={'contain'}
  />,
  <Image
    key={1}
    width={164}
    height={191}
    src={'https://cdn.pixabay.com/photo/2022/01/18/07/38/cat-6946505__340.jpg'}
    alt={'Cat1'}
    mode={'contain'}
  />,
];

const DUMMY_DATA_FRIEND = [
  <Image
    key={2}
    width={164}
    height={191}
    src={
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MDdfMjUg%2FMDAxNjI1NjQwMDUxNzQx.xIHvI5QDsFKStRfSQVZAw9goy25D4dXc2LwX1t1CWS4g.uvLVOAogehwoxH9KNCJ3661UDKUlbV1yL-fkrUPOOnkg.JPEG.uzeeo%2FIMG_1907.JPG&type=a340'
    }
    alt={'Cat1'}
    mode={'contain'}
  />,
  <Image
    key={3}
    width={164}
    height={191}
    src={
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MDdfMjUg%2FMDAxNjI1NjQwMDUxNzQx.xIHvI5QDsFKStRfSQVZAw9goy25D4dXc2LwX1t1CWS4g.uvLVOAogehwoxH9KNCJ3661UDKUlbV1yL-fkrUPOOnkg.JPEG.uzeeo%2FIMG_1907.JPG&type=a340'
    }
    alt={'Cat1'}
    mode={'contain'}
  />,
  <Image
    key={1}
    width={164}
    height={191}
    src={
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MDdfMjUg%2FMDAxNjI1NjQwMDUxNzQx.xIHvI5QDsFKStRfSQVZAw9goy25D4dXc2LwX1t1CWS4g.uvLVOAogehwoxH9KNCJ3661UDKUlbV1yL-fkrUPOOnkg.JPEG.uzeeo%2FIMG_1907.JPG&type=a340'
    }
    alt={'Cat1'}
    mode={'contain'}
  />,
];
export default {
  title: 'Components/Tab',
  component: Tab,
};

export const Default = () => {
  return (
    <Tab
      list={{
        '내 기념일': DUMMY_DATA_ME,
        '친구 기념일': DUMMY_DATA_FRIEND,
      }}
      column={2}
    />
  );
};
