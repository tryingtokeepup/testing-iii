// Test away!
import React from 'React';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import renderer from 'react-test-renderer';

import Display from './Display';

describe('<Display />', () => {
  it('matches', () => {
    //react
    const node = renderer.create(<Display />);
    expect(node.toJSON()).toMatchSnapshot();
  });

  // how about changing the snapshot that has different props passed in

  it('matches a snapshot with props passed into it', () => {
    const node = renderer.create(<Display locked={true} />);

    expect(node.toJSON()).toMatchSnapshot();
  });

  it('should use red-led class when locked', () => {
    const { getByText } = render(<Display locked={true} />);

    const lockedDisplay = getByText(/locked/i);

    expect(lockedDisplay).toHaveClass('red-led');
  });
  it('should use green-led class when unlocked', () => {
    const { getByText } = render(<Display locked={false} />);

    const lockedDisplay = getByText(/unlocked/i);

    expect(lockedDisplay).toHaveClass('green-led');
  });
});
