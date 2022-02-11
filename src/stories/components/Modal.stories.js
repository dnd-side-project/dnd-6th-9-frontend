import { useState } from 'react';
import { Modal } from '@components/base';
import styled from '@emotion/styled';
export default {
  title: 'Component/Modal',
  component: Modal,
};

const TestBtn = styled.button`
  width: 100%;
  height: 40px;

  &:nth-child(1) {
    margin-bottom: 6px;
  }
`;

// 드롭다운/툴팁 다 작동가능합니다.
export const Default = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        Show Modal
      </button>
      <Modal visible={visible} onClose={() => setVisible(false)}>
        <TestBtn>Modal Content</TestBtn>
        <TestBtn>Modal Content</TestBtn>
      </Modal>
    </div>
  );
};
