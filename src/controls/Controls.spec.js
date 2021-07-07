// Test away!
import React from 'React';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls';

describe('how the component <Controls /> should work', () => {
  it('should have the lock button unoperative when gate is open', () => {
    const { getByText } = render(<Controls />);

    const lockBtn = getByText(/lock gate/i);

    fireEvent.click(lockBtn);
    expect(lockBtn.disabled).toBe(true);
  });

  it('closed toggle button should call the passed function', () => {
    const mockFn = jest.fn(); //mocking
    const { getByText } = render(
      <Controls toggleClosed={mockFn} closed={false} />
    );
    const button = getByText(/close gate/i);

    fireEvent.click(button);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should disable locked toggle button if the gate is open', () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <Controls toggleClosed={mockFn} closed={false} />
    );
    const button = getByText(/lock gate/i);
    expect(button).toBeDisabled();

    fireEvent.click(button);

    expect(mockFn).not.toHaveBeenCalled();
  });
});
