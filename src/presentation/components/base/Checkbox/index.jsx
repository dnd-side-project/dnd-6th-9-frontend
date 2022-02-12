import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, CheckboxInput, CheckboxLabel, LabelText } from './style';
import {
  animated,
  useSpring,
  config,
  useChain,
  useSpringRef,
} from 'react-spring';
import { COLOR } from '@styles';
const Checkbox = ({ name, onChange, labelText, checked, ...props }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const [checkmarkLength, setCheckmarkLength] = useState(null);
  const checkboxAnimationRef = useSpringRef();
  const checkmarkAnimationRef = useSpringRef();
  const checkboxAnimation = useSpring({
    backgroundColor: isChecked ? COLOR.PURPLE_500 : COLOR.GRAY_0,
    borderColor: isChecked ? COLOR.PURPLE_500 : COLOR.GRAY_200,
    config: config.gentle,
    ref: checkboxAnimationRef,
  });

  const checkmarkAnimation = useSpring({
    x: isChecked ? 0 : checkmarkLength,
    config: config.gentle,
    ref: checkmarkAnimationRef,
  });

  useChain(
    isChecked
      ? [checkboxAnimationRef, checkmarkAnimationRef]
      : [checkmarkAnimationRef, checkboxAnimationRef],
    [0, 0.1],
  );

  const handleChange = (e) => {
    const { checked, name } = e.target;
    setIsChecked(checked);
    onChange && onChange({ name, checked });
  };

  return (
    <Container>
      <CheckboxInput
        type="checkbox"
        name={name}
        onChange={handleChange}
        checked={isChecked}
        {...props}
      />
      <CheckboxLabel
        style={checkboxAnimation}
        className={isChecked ? 'active' : ''}
        aria-hidden="true"
        viewBox="0 0 15 11"
        fill="none"
      >
        <animated.path
          d="M2 4.5L5 9L13 1"
          strokeWidth="1"
          stroke={isChecked ? '#fff' : 'none'}
          strokeLinecap="round"
          strokeDasharray={checkmarkLength}
          strokeDashoffset={checkmarkAnimation.x}
          ref={(ref) => {
            if (ref) setCheckmarkLength(ref.getTotalLength());
          }}
        />
      </CheckboxLabel>
      <LabelText>{labelText}</LabelText>
    </Container>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  checked: PropTypes.bool,
};
