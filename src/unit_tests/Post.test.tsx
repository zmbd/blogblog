import React from 'react';
import { render, screen } from '@testing-library/react';
import Post from '../components/Post';

const testPostContent = '<strong>Test post content</strong>';

const renderPost = (post: string) => {
  return render(<Post post={post} />);
};

describe('Post', () => {
  test('renders post content correctly', () => {
    renderPost(testPostContent);
    const postElement = screen.getByTestId('post');
    expect(postElement.innerHTML).toBe(testPostContent);
  });
});
