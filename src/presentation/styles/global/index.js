import emotionReset from 'emotion-reset';
import { css } from '@emotion/react';

const GlobalStyle = css`
  ${emotionReset};
  html,
  body {
    max-width: 414px;
    height: 100%;
    margin: 0 auto;
  }

  * {
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
    border: none;
    outline: none;
    -webkit-appearance: none;
    border-radius: 0;
    padding: 0;
  }
  input {
    -webkit-appearance: none;
    -webkit-border-radius: 0;
  }
  input:focus {
    outline: none;
  }
  body,
  button,
  input,
  textarea {
    font-family: 'SUIT', -apple-system, BlinkMacSystemFont, system-ui, Roboto,
      'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
      'Malgun Gothic', sans-serif;
  }
  textarea {
    box-sizing: border-box;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  textarea:focus {
    outline: none;
  }
  a {
    text-decoration: none;
  }
  input[disabled] {
    background-color: white;
  }
`;

export default GlobalStyle;
