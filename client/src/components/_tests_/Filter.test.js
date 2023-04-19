/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import Filter from './Filter';
import '@testing-library/jest-dom';

it('all four checkboxes are rendering', () => {
  render(<Filter />);
  const checkboxes = screen.getAllByRole('checkbox');
  expect(checkboxes.length).toBe(4);
});
it('checkboxes initial value set to false', () => {
  render(<Filter />);
  const checkboxes = screen.getAllByRole('checkbox');
  checkboxes.forEach((x) => expect(x.value).toEqual('false'));
});
