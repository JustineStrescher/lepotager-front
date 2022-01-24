export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export const changeInputValue = (inputValue) => ({
  type: CHANGE_INPUT_VALUE,
  newValue: inputValue,
});
