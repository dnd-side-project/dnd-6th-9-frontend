import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const TemplateContainer = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter};
`;

const DefaultTemplate = ({ children }) => {
  return <TemplateContainer>{children}</TemplateContainer>;
};

export default DefaultTemplate;

DefaultTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
