import React, { useState } from "react";

const LinkButton = (props) => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  const buttonText = isActive ? props.newText : props.text;
  const buttonColor = isActive ? props.newColor : props.bg;

  const styles = {
    set: {
      width: props.width,
      height: props.height,
      borderRadius: props.radius,
      fontWeight: '700',
      fontSize: '18px',
      border: 'none',
      color: 'white',
      backgroundColor: buttonColor,
    }
  };

  return (
    <>
      <button className={isActive ? '' : 'btn-foo'} style={styles.set} onClick={toggleButton}>
        {buttonText}
      </button>
    </>
  );
};

export default LinkButton;
