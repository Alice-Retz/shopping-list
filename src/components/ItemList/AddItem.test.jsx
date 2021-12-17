import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

beforeAll(() => {
  render(<App />);
});

it('should add a new item to list', async () => {
  const input = screen.getByPlaceholderText('New Item');
  userEvent.type(input, 'test');
  const submit = screen.getByRole('button', { name: 'Add New Item' });
  userEvent.click(submit);

  await screen.findByText('test');
});
