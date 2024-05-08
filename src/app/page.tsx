'use client';

import { DesktopNav } from '@/components/shared/Navigation';
import Wrapper from '@/components/ui/Wrapper';
import MainContent from '@/MainContent';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';

const Home = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <MainContent />
        <DesktopNav />
      </Wrapper>
    </Provider>
  );
};

export default Home;
