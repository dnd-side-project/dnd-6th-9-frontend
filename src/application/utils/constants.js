import onBoardingImg1 from '@assets/images/Onboarding/onBoarding1.svg';
import onBoardingImg2 from '@assets/images/Onboarding/onBoarding2.svg';
import onBoardingImg3 from '@assets/images/Onboarding/onBoarding3.svg';
import kakaoIcon from '@assets/icons/kakao_icon.svg';
import googleIcon from '@assets/icons/google_icon.svg';

export const MAX_WIDTH = '414px';
export const MIN_WIDTH = '320px';
export const CHECK_BOX_SIZE = '20px';

// OnboardingPage
export const SLIDES = [
  {
    logo: 'Gratz!',
    title: '특별한 날을 친구들과 더 소중하게',
    subTitle:
      '생일 그리고 입학과 같이 나만의 소중한 날,\n친구들과 함께 기다려보세요',
    img: onBoardingImg1,
  },
  {
    logo: 'Gratz Every Day!',
    title: '매일의 설레임과 함께',
    subTitle:
      '나만의 특별한 날을 응원하는 친구들이 보낸\n선물을 매일 확인할 수 있어요.',
    img: onBoardingImg2,
  },
  {
    logo: 'Gratz Forever!',
    title: '추억에 빠져보세요.',
    subTitle: '친구들이 보내준 소중한 마음들!\n저장하며 간직해보세요.',
    img: onBoardingImg3,
  },
];

// LoginPage

export const SOCIAL_LOGIN_BUTTON_LIST = [
  {
    Text: '카카오톡으로 시작하기',
    color: '#FEE500',
    icon: kakaoIcon,
    link: '',
  },
  {
    Text: 'Google로 시작하기',
    color: '#F1F4F6',
    icon: googleIcon,
    link: '',
  },
];

export const MENU_LAYER_LIST = [
  {
    Text: '홈',
    link: '/',
  },
  {
    Text: '서비스 소개',
    link: '/',
  },
  {
    Text: '로그아웃',
    link: '/',
  },
  {
    Text: '회원 탈퇴',
    link: '/',
  },
  {
    Text: '문의하기',
    link: '/',
  },
];
