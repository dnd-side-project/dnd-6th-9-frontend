import { useRef, useState } from 'react';
import { UploadContainer, Input } from './style';
import PropTypes from 'prop-types';

const Upload = ({ children, name, accept, value, onChange, ...props }) => {
  const inputRef = useRef(null);
  const [file, setFile] = useState(value);
  const [fileUrl, setFileUrl] = useState('');

  const handleChooseFile = () => {
    inputRef.current.click();
  };

  const handleFileChange = (e) => {
    let reader = new FileReader();
    const files = e.target.files;
    const changeFile = files[0];
    setFile(changeFile);
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      setFileUrl(reader.result);
    };
    onChange && onChange(changeFile);
  };

  return (
    <UploadContainer onClick={handleChooseFile} {...props}>
      <Input
        ref={inputRef}
        type="file"
        name={name}
        accept={accept}
        onChange={handleFileChange}
      />
      {typeof children === 'function' ? children(file, fileUrl) : children}
    </UploadContainer>
  );
};

export default Upload;

Upload.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  name: PropTypes.string,
  accept: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

Upload.defaultProps = {
  children: null,
  name: '',
  accept: 'image/*',
  value: null,
  onChange: () => {},
};
