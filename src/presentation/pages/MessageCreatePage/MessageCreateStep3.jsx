import React, { useState } from 'react';
import { COLOR } from '@styles';
import PropTypes from 'prop-types';
import plus from '@assets/icons/plus.svg';
import deleteIcon from '@assets/icons/delete_icon.svg';

import {
  Icon,
  Button,
  Textarea,
  Input,
  Checkbox,
  Image,
  Upload,
} from '@components/base';
import {
  StepTitle,
  MessageWithIconWrapper,
  InputContainer,
  SenderInput,
  PrivateMessageInput,
  ImageWrapper,
  ErrorIcon,
  WarningMessage,
  //UploadStyle,
  ButtonStyle,
  TextAreaStyle,
  ButtonText,
  SenderTitle,
  EditText,
  InputTitleWrapper,
  PrivateMsgText,
} from './style';

const MessageCreateStep3 = ({
  handleChangeTextArea,
  handleChangeFile,
  handleChangeName,
  handleChangePrivate,
}) => {
  const [content, setContent] = useState('');
  const [imageSrc, setimageSrc] = useState(null);
  const [name, setName] = useState('');
  const [privateCheck, setPrivateCheck] = useState(false);

  const handleChangeContent = (value) => {
    const { text, error } = value;
    if (!error) {
      setContent(text);
      handleChangeTextArea(text);
    }
  };
  const handleUpload = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setimageSrc(reader.result);
      handleChangeFile(file);
    };
  };

  const handleChangeNameInput = ({ value }) => {
    setName(value);
    handleChangeName(value);
  };
  const handleChangeCheckbox = ({ checked }) => {
    setPrivateCheck(checked);
    handleChangePrivate(checked);
  };

  return (
    <>
      <StepTitle>
        메시지를 작성해주세요
        <MessageWithIconWrapper className="warning">
          <ErrorIcon />
          <WarningMessage>
            욕설 및 비방 작성시 신고 대상이 될 수 있어요.
          </WarningMessage>
        </MessageWithIconWrapper>
      </StepTitle>

      <InputContainer>
        {imageSrc ? (
          <>
            <ImageWrapper>
              <Image
                src={imageSrc}
                width={'100%'}
                height={246}
                mode={'contain'}
              />
            </ImageWrapper>
            <Button
              type={'select'}
              style={ButtonStyle}
              onClick={() => setimageSrc('')}
            >
              <MessageWithIconWrapper>
                <Icon
                  src={deleteIcon}
                  height={20}
                  width={20}
                  fill={COLOR.GRAY_900}
                />
                <ButtonText>사진 삭제하기</ButtonText>
              </MessageWithIconWrapper>
            </Button>
            <TextAreaStyle>
              <Textarea
                name={'message'}
                onChange={handleChangeContent}
                value={content}
                maxLength={300}
                placeholder={'메시지를 작성해주세요.'}
                style={{ marginTop: '8px' }}
              />
            </TextAreaStyle>
          </>
        ) : (
          <>
            <Textarea
              name={'message'}
              onChange={handleChangeContent}
              value={content}
              maxLength={300}
              placeholder={'메시지를 작성해주세요.'}
            />
            <Upload
              name={'사진업로드'}
              value={imageSrc}
              onChange={handleUpload}
              style={{ width: '100%' }}
            >
              <Button type={'select'} style={ButtonStyle}>
                <MessageWithIconWrapper>
                  <Icon
                    src={plus}
                    height={20}
                    width={20}
                    fill={COLOR.GRAY_900}
                  />
                  <ButtonText>사진 추가하기</ButtonText>
                </MessageWithIconWrapper>
              </Button>
            </Upload>
          </>
        )}
      </InputContainer>

      <SenderInput>
        <InputTitleWrapper>
          <SenderTitle>보내는 사람</SenderTitle>
          <EditText>수정</EditText>
        </InputTitleWrapper>
        <Input
          width={'100%'}
          value={name}
          onChange={handleChangeNameInput}
          placeholder={'보내는 사람 이름을 입력해주세요.'}
        />
      </SenderInput>

      <PrivateMessageInput>
        <Checkbox
          name="privateMessageCheck"
          onChange={handleChangeCheckbox}
          labelText={'비밀메세지'}
          checked={privateCheck}
        />
        <PrivateMsgText>
          비밀메시지를 작성하면 상대방만 메시지를 볼 수 있어요!
        </PrivateMsgText>
      </PrivateMessageInput>
    </>
  );
};

export default MessageCreateStep3;

MessageCreateStep3.propTypes = {
  handleChangeTextArea: PropTypes.func,
  handleChangeFile: PropTypes.func,
  handleChangePrivate: PropTypes.func,
  handleChangeName: PropTypes.func,
};
