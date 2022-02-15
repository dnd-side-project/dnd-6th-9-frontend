import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { Tab } from '@components/base';

export default {
  title: 'Components/Tab',
  component: Tab,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const labels = ['내 기념일', '친구 기념일'];

export const Default = () => {
  return (
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route
          component={(routerProps) => <Tab {...routerProps} labels={labels} />}
          path="/event/me"
        />
      </Routes>
    </MemoryRouter>
  );
};
