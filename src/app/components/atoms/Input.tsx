import React from 'react';
import styles from '../../styles/atoms/input/input.styles.module.css';

interface Input {
  inputText: string;
  setInputText: (value: string | ((prevVar: string) => string)) => void;
  label?: string;
  onSubmit?: React.FormEventHandler<HTMLElement>;
}

const Input = ({ inputText, setInputText, label = '', onSubmit }: Input) => {
  const handleSearch = (e: { target: { value: string | ((prevVar: string) => string) } }) =>
    setInputText(e.target.value);

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement | HTMLElement> = (e) => {
    e.preventDefault();
    onSubmit(e);
    setInputText('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>{label}</label>
      <input value={inputText} onChange={handleSearch} type="text" />
      <input type="submit" />
    </form>
  );
};

export default React.memo(Input);
