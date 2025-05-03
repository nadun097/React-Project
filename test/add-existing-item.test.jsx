import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddExistingItem from '../components/AddExistingItem';

test('should add an existing item correctly', () => {
    render(<AddExistingItem />);
    
    // Ensure input field exists
    const input = screen.getByPlaceholderText('Enter item name');
    expect(input).toBeInTheDocument();

    // Simulate typing and clicking
    userEvent.type(input, 'Test Item');
    const addButton = screen.getByText('Add');
    expect(addButton).toBeInTheDocument();
    userEvent.click(addButton);

    // Verify success message
    const successMessage = screen.getByText('Item added successfully');
    expect(successMessage).toBeInTheDocument();
});
