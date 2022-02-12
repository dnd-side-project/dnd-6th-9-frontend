import { Upload } from '@components/base';
import styled from '@emotion/styled';

export default {
  title: 'Components/Upload',
  component: Upload,
};

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Default = () => (
  <Upload>
    <button>ClickMe</button>
  </Upload>
);

export const AccessFile = () => {
  return (
    <Upload>
      {(file, fileUrl) => (
        <>
          <button>{file ? file.name : 'Click me'}</button>
          {file && <Image src={fileUrl} />}
        </>
      )}
    </Upload>
  );
};
