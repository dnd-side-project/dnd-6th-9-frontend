import React from 'react';
import PropTypes from 'prop-types';
import { RootHeaderWrapper, RootHeader, Content } from './style';
const Header = ({ leftContent, centerContent, rightContent }) => {
  return (
    <RootHeaderWrapper>
      <RootHeader>
        <Content align={'flex-start'}>{leftContent}</Content>
        <Content align={'center'}>{centerContent}</Content>
        <Content align={'flex-end'}>{rightContent}</Content>
      </RootHeader>
    </RootHeaderWrapper>
  );
};

export default Header;

Header.propTypes = {
  leftContent: PropTypes.node,
  centerContent: PropTypes.node,
  rightContent: PropTypes.node,
};

Header.defaultProps = {
  leftContent: null,
  centerContent: null,
  rightContent: null,
};
