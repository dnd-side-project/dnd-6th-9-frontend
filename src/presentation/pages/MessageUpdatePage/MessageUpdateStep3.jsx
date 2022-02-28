import React from 'react';
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

const MessageUpdateStep3 = ({
  formData,
  handleChangeTextArea,
  handleDeleteFile,
  handleChangeFile,
  handleChangeName,
  handleChangePrivate,
}) => {
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
        {formData['image-url'] ? (
          <>
            <ImageWrapper>
              <Image
                src={formData['image-url']}
                width={'100%'}
                height={246}
                mode={'contain'}
              />
            </ImageWrapper>
            <Button
              type={'select'}
              style={ButtonStyle}
              onClick={handleDeleteFile}
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
                onChange={handleChangeTextArea}
                value={formData['content']}
                maxLength={300}
                placeholder={'메시지를 작성해주세요.'}
              />
            </TextAreaStyle>
          </>
        ) : (
          <>
            <Textarea
              name={'message'}
              onChange={handleChangeTextArea}
              value={formData['content']}
              maxLength={300}
              placeholder={'메시지를 작성해주세요.'}
            />
            <Upload
              name={'사진업로드'}
              onChange={handleChangeFile}
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
          value={formData['nick-name']}
          onChange={handleChangeName}
          placeholder={'보내는 사람 이름을 입력해주세요.'}
        />
      </SenderInput>

      <PrivateMessageInput>
        <Checkbox
          name="privateMessageCheck"
          onChange={handleChangePrivate}
          labelText={'비밀메세지'}
          checked={formData['public']}
        />
        <PrivateMsgText>
          비밀메시지를 작성하면 상대방만 메시지를 볼 수 있어요!
        </PrivateMsgText>
      </PrivateMessageInput>
    </>
  );
};

export default MessageUpdateStep3;

MessageUpdateStep3.propTypes = {
  formData: PropTypes.object,
  handleChangeTextArea: PropTypes.func,
  handleChangeFile: PropTypes.func,
  handleDeleteFile: PropTypes.func,
  handleChangePrivate: PropTypes.func,
  handleChangeName: PropTypes.func,
};
