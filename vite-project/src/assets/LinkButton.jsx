import React, { useEffect, useState } from "react";

const LinkButton = (props) => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(true);

    setTimeout(() => {
      setIsActive(false);
    }, 500);

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

const CopyButton = (props) => {

  const [buttonState, setButtonState] = useState({ isCopied: false });

  const handleCopy = () => {
    try {
      const input = document.createElement('textarea');
      input.value = props.element;
      document.body.appendChild(input);

      input.select();
      document.execCommand('copy');

      document.body.removeChild(input);
      setButtonState({ ...buttonState, isCopied: true });
    } catch (err) {
      console.error('Could not copy to clipboard:', err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonState({ ...buttonState, isCopied: false });
    }, 5000);
    return () => clearTimeout(timer);
  }, [buttonState]);

  const buttonColor = buttonState.isCopied ? props.newColor : props.bg;

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
    },
  };

  return (
    <>
      <button style={styles.set} onClick={handleCopy}>
        {buttonState.isCopied ? 'Copied!' : 'Copy'}
      </button>
    </>
  );
};

export { LinkButton, CopyButton };
