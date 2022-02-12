// Message 오류 타입 체킹
export const validaterTypeMsg = (type) => {
  switch (type) {
    case 'space':
      return {
        isSuccess: false,
        error: '내용을 입력해주세요.',
      };
    case 'long':
      return {
        isSuccess: false,
        error: '내용 길이가 제한을 초과했습니다.',
      };
    case 'success':
    default:
      return {
        isSuccess: true,
      };
  }
};

// Text 길이 체킹 및 그에 따른 exception
export const textCheckByte = (text, maxLength) => {
  const maxTextByteLength = maxLength;
  const spaceCheck = text.match(/\s| /gi, '');
  if (spaceCheck === '') {
    return validaterTypeMsg('space');
  }
  const totalTextByteLength = text.length;
  if (totalTextByteLength <= maxTextByteLength) {
    return validaterTypeMsg();
  } else {
    return validaterTypeMsg('long');
  }
};
