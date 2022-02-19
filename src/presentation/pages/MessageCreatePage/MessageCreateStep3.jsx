import React, { useState } from 'react';
import { COLOR } from '@styles';
import PropTypes from 'prop-types';
import warning from '@assets/icons/warning.svg';
import plus from '@assets/icons/plus.svg';
import {
  Icon,
  Button,
  Textarea,
  Input,
  Checkbox,
  Upload,
  Image,
} from '@components/base';
import {
  StepTitle,
  MessageWithIconWrapper,
  InputContainer,
  SenderInput,
  PrivateMessageInput,
  ImageWrapper,
} from './style';

const MessageCreateStep3 = ({
  handleChangeTextArea,
  handleChangeFile,
  handleChangeName,
  handleChangePrivate,
}) => {
  const [imageSrc, setImageSrc] = useState('');
  const [content, setContent] = useState('');
  const [name, setName] = useState('');
  const [privateCheck, setPrivateCheck] = useState(false);

  const handleUpload = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageSrc(reader.result);
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

  const handleChangeContent = (value) => {
    const { text, error } = value;
    if (!error) {
      setContent(text);
      handleChangeTextArea(text);
    }
  };

  return (
    <>
      <StepTitle>
        메시지를 작성해주세요
        <MessageWithIconWrapper className="warning">
          <Icon src={warning} height={16} width={16} fill={COLOR.RED_500} />
          <span>욕설 및 비방 작성시 신고 대상이 될 수 있어요.</span>
        </MessageWithIconWrapper>
      </StepTitle>

      <InputContainer>
        {imageSrc ? (
          <>
            <ImageWrapper>
              <Image src={imageSrc} width={'100%'} height={246} mode={'fill'} />
            </ImageWrapper>
            <Button
              type={'select'}
              style={{ width: '100%', height: '36px', margin: '8px 0px' }}
              onClick={() => setImageSrc('')}
            >
              <MessageWithIconWrapper>
                <Icon src={plus} height={20} width={20} fill={COLOR.GRAY_900} />
                <span>사진 삭제하기</span>
              </MessageWithIconWrapper>
            </Button>
            <Textarea
              name={'message'}
              onChange={handleChangeContent}
              value={content}
              maxLength={300}
              placeholder={'메시지를 작성해주세요.'}
              style={{ marginTop: '8px' }}
            />
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
              <Button
                type={'select'}
                style={{ width: '100%', height: '36px', marginTop: '8px' }}
              >
                <MessageWithIconWrapper>
                  <Icon
                    src={plus}
                    height={20}
                    width={20}
                    fill={COLOR.GRAY_900}
                  />
                  <span>사진 추가하기</span>
                </MessageWithIconWrapper>
              </Button>
            </Upload>
          </>
        )}
      </InputContainer>

      <SenderInput>
        <div className="title">
          <span>보내는 사람</span>
          <div>수정</div>
        </div>
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
        <div className="detail">
          비밀메시지를 작성하면 상대방만 메시지를 볼 수 있어요!
        </div>
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
