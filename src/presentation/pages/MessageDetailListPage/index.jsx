import React from 'react';
import {
  DefaultPageHeader,
  MessageListTab,
  MessageList,
} from '@components/domain';
import { Background, Footer } from './style';

const MessageDetailListPage = () => {
  return (
    <>
      <Background>
        <DefaultPageHeader />
        <MessageListTab startDay={'2022-03-02'} endDay={'2022-03-15'} />
        <MessageList />
        <Footer />
      </Background>
    </>
  );
};

export default MessageDetailListPage;
