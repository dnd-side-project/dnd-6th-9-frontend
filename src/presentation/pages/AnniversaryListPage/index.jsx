import React from 'react';
import { DefaultPageHeader } from '@components/domain';
import { Tab } from '@components/base';
import { AnniversaryListContent } from '@components/domain';
import { Background, TabWrapper } from './style';

const labels = ['나의 기념일', '스크랩한 기념일'];
const AnniversaryListPage = () => {
  const handleGoBack = () => {};
  return (
    <Background>
      <DefaultPageHeader handleGoBack={handleGoBack} />
      <TabWrapper>
        <Tab labels={labels} />
      </TabWrapper>
      <AnniversaryListContent />
    </Background>
  );
};

export default AnniversaryListPage;
