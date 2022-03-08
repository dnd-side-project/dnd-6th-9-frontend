import React, { useState, useRef } from 'react';
import {
  DropDownContent,
  Item,
  IconWrapper,
  ModalStyle,
  ModalContent,
  ModalText,
  ModalButtonStyle,
  ModalSubText,
  ButtonContainer,
} from './style';
import { Icon, Modal, Button } from '@components/base';
import moreVertical from '@assets/icons/more_vertical.svg';
import { COLOR } from '@styles';
import html2canvas from 'html2canvas';

const DropDown = () => {
  const [dropDown, setDropDown] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const DropDownRef = useRef();

  const onClickUpdate = () => {
    console.log('done');
  };
  const onClickDelete = () => {
    setDeleteModalVisible((prev) => !prev);
  };

  const onClickCancelButton = () => {
    setDeleteModalVisible((prev) => !prev);
  };

  const onClickDeleteButton = () => {
    setDeleteModalVisible((prev) => !prev);
  };
  const onClickCapture = () => {
    DropDownRef.current.className = DropDownRef.current.className.replace(
      'dropDownOn',
      'dropDownOff',
    );
    downloadImg();
  };

  const downloadImg = () => {
    html2canvas(document.getElementById('root')).then((canvas) => {
      onSaveAs(canvas.toDataURL('image/png'), 'image-download.png');
    });
  };
  const onSaveAs = (uri, filename) => {
    let link = document.createElement('a');
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <IconWrapper onClick={() => setDropDown((prev) => !prev)}>
        <Icon
          src={moreVertical}
          width={24}
          height={24}
          fill={dropDown ? COLOR.PURPLE_500 : COLOR.GRAY_900}
        />
        <DropDownContent
          className={dropDown ? 'dropDownOn' : 'dropDownOff'}
          ref={DropDownRef}
        >
          <Item onClick={onClickCapture}>이미지로 저장</Item>
          <Item onClick={onClickUpdate}>수정하기</Item>
          <Item onClick={onClickDelete}>삭제하기</Item>
        </DropDownContent>
      </IconWrapper>
      <Modal width={'90%'} visible={deleteModalVisible} css={ModalStyle}>
        <ModalContent>
          <ModalText>친구에게 받은 선물을 삭제할까요?</ModalText>
          <ModalSubText>선물을 삭제하면 복구할 수 없어요!</ModalSubText>
          <ButtonContainer>
            <Button
              type={'danger'}
              onClick={onClickCancelButton}
              style={ModalButtonStyle}
            >
              취소
            </Button>
            <Button
              type={'secondary'}
              onClick={onClickDeleteButton}
              style={ModalButtonStyle}
            >
              확인
            </Button>
          </ButtonContainer>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DropDown;
