import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PostEditor from '../components/PostEditor';
import { postType } from '../propTypes';

const closeModal = jest.fn();

const testPost: postType = {
  name: 'Test post',
  post: 'Test post content',
  authorLabel: 'Author label',
  imgUrl: 'https://example.com/image.jpg',
  writtenBy: 'Author name',
  writtenOn: new Date('2023-04-10T10:20:30Z'),
};

const renderPostEditor = (edit: boolean, post?: postType) => {
  if (post !== undefined)
    return render(<PostEditor closeModal={closeModal} edit={edit} />);
  return render(<PostEditor post={post} closeModal={closeModal} edit={edit} />);
};

describe('PostEditor', () => {
  test('renders PostEditor with the given post', async () => {
    renderPostEditor(false, testPost);

    await waitFor(() => {
      expect(screen.getByTestId('post-title')).toHaveValue(testPost.name);
    });
    await waitFor(() => {
      expect(screen.getByTestId('author-label')).toHaveValue(
        testPost.authorLabel,
      );
    });
    await waitFor(() => {
      expect(screen.getByTestId('image-url')).toHaveValue(testPost.imgUrl);
    });
    await waitFor(() => {
      expect(screen.getByTestId('author-name')).toHaveValue(testPost.writtenBy);
    });
  });

  test('renders PostEditor in edit mode', async () => {
    renderPostEditor(true, testPost);

    await waitFor(() => {
      const publishUpdateButton = screen.getByTestId('publish-update-button');
      expect(publishUpdateButton).toBeInTheDocument();
    });
  });

  test('renders PostEditor in create mode', async () => {
    renderPostEditor(false);

    await waitFor(() => {
      const publishUpdateButton = screen.getByTestId('publish-update-button');
      expect(publishUpdateButton).toBeInTheDocument();
    });
  });
});
