import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

beforeEach(() => {
  render(<App />);
});

//delete from list
it('should delete an item from the list', async () => {
  const juiceBox = screen.getByText('Juice 🧃');
  const deleteBtn = screen.getByRole('button', {
    name: 'Juice 🧃 delete button',
  });
  userEvent.click(deleteBtn);

  expect(juiceBox).not.toBeInTheDocument();
});

//edit item
it('should edit the name of an item', async () => {
  const editBtn = screen.getByRole('button', { name: 'Juice 🧃 edit button' });
  userEvent.click(editBtn);
  const input = screen.getByPlaceholderText('Edit Juice 🧃');
  input.setSelectionRange(0, input.value.length);
  userEvent.type(input, 'rum');
  const submit = screen.getByRole('button', { name: 'Update item' });
  userEvent.click(submit);

  await screen.findByText('rum');
});

//display list of items
it('should return the default items that render on load', async () => {
  const juice = screen.getByText('Juice 🧃');
  const rant = screen.getByText('Croissant 🥐');
  const bacon = screen.getByText('Bacon 🥓');

  expect(juice).toBeInTheDocument();
  expect(rant).toBeInTheDocument();
  expect(bacon).toBeInTheDocument();
});
