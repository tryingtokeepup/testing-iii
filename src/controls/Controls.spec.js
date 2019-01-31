// Test away!
import React from 'React';
import { render, fireEvent } from 'react-testing-library';

import Controls from './Controls';

describe('how the component <Controls /> should work', () => {
  it('should have the lock button unoperative when gate is open', () => {
    const { getByText } = render(<Controls />);

    const lockBtn = getByText(/lock gate/i);

    fireEvent.click(lockBtn);
    expect(lockBtn.disabled).toBe(true);
  });
});
