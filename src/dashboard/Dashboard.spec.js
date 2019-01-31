// Test away
import React from 'React';
import { render, fireEvent } from 'react-testing-library';

import Dashboard from './Dashboard';

describe('the component named <Dashboard />', () => {
  it('has its initial state in default state', () => {
    // thank you Yasirah for your tips!
    const { getByText } = render(<Dashboard />);

    const initialLockStatus = getByText('Unlocked');
    const initialLockToggleBtn = getByText('Lock Gate');
    const initialGateStatus = getByText('Open');
    const initialGateToggleBtn = getByText('Close Gate');

    expect(initialLockStatus.textContent).toBe('Unlocked');
    expect(initialLockToggleBtn.textContent).toBe('Lock Gate');
    expect(initialGateStatus.textContent).toBe('Open');
    expect(initialGateToggleBtn.textContent).toBe('Close Gate');
  });
  it('changes its gate status when gateToggleBtn is clicked', () => {
    const { getByText } = render(<Dashboard />);

    const gateToggleBtn = getByText(/Close Gate/i);
    fireEvent.click(gateToggleBtn);
  });
});
