import React from 'react';
import PropTypes from 'prop-types';
import { StatusBadge, Button, Image } from '@components/base';
import { ReactComponent as SCRAP_ICON_ON } from '@assets/icons/scrap_icon.svg';
import { ReactComponent as SCRAP_ICON_OFF } from '@assets/icons/scrap_icon_off.svg';
import { ReactComponent as SHARE_ICON } from '@assets/icons/share_icon.svg';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  ContentCardBox,
  ContentHeader,
  TargetDateBox,
  ContentTitle,
  PresentBox,
  ThemeImageBox,
  PresentBoxHeader,
  PresentBoxText,
  ShareButtonStyle,
  ButtonWrapper,
  PresentListBox,
  PresentItemBox,
  PresentItemIcon,
  PresentItemTitle,
  wrapperStyle,
  titleStyle,
  textStyle,
  NumberBadge,
  PRESENT_IMAGE,
} from './style';
const AnniversaryCard = ({
  title,
  isProgress,
  isScrap,
  presentList,
  presentCount,
  link,
}) => {
  if (!title && !isProgress && !isScrap && !presentList && !link) {
    return (
      <Wrapper css={wrapperStyle}>
        <ContentTitle css={titleStyle}>아직 기념일이 없어요!</ContentTitle>
        <PresentBoxText css={textStyle}>
          소중한 기억을 만들어 보세요.
        </PresentBoxText>
        <Image width={160} height={100} src={PRESENT_IMAGE} />
        <Link to="/anniversaryNew">
          <Button style={ShareButtonStyle} type={'primary'}>
            기념일 만들기
          </Button>
        </Link>
      </Wrapper>
    );
  }

  const handleScrap = () => {
    console.log('scrap');
  };

  const renderPresentList = (presentList) =>
    presentList.map(
      ({ title, presentImage }, index) =>
        index < 5 && (
          <PresentItemBox key={index}>
            <Image
              src={presentImage}
              width={'100%'}
              height={'100%'}
              css={PresentItemIcon}
              alt={'선물 아이콘'}
            />
            <PresentItemTitle>{title}</PresentItemTitle>
          </PresentItemBox>
        ),
    );

  return (
    <Wrapper>
      <ContentCardBox>
        <ContentHeader>
          <StatusBadge isProgress={isProgress} />
          <TargetDateBox>{'D-8'}</TargetDateBox>
          <ButtonWrapper onClick={handleScrap}>
            {isScrap ? <SCRAP_ICON_ON /> : <SCRAP_ICON_OFF />}
          </ButtonWrapper>
        </ContentHeader>
        <ContentTitle>{title}</ContentTitle>
        <ThemeImageBox />
      </ContentCardBox>
      <Link to={link}>
        <PresentBox>
          <PresentBoxHeader>
            최근 받은 선물{' '}
            {presentList.length > 0 ? (
              <NumberBadge>{presentCount}</NumberBadge>
            ) : (
              ''
            )}
          </PresentBoxHeader>
          {presentList.length === 0 ? (
            <PresentListBox>
              <PresentBoxText>아직 받은 선물이 없어요</PresentBoxText>
              <Button style={ShareButtonStyle} type={'select'}>
                <SHARE_ICON /> 기념일 공유하기
              </Button>
            </PresentListBox>
          ) : (
            <PresentListBox>{renderPresentList(presentList)}</PresentListBox>
          )}
        </PresentBox>
      </Link>
    </Wrapper>
  );
};

export default AnniversaryCard;

AnniversaryCard.propTypes = {
  title: PropTypes.string,
  targetDate: PropTypes.string,
  isProgress: PropTypes.bool,
  isScrap: PropTypes.bool,
  link: PropTypes.string,
  presentList: PropTypes.array,
  presentCount: PropTypes.number,
};
