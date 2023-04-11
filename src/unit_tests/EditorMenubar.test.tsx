import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EditorMenubar from '../components/EditorMenubar';
import { Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

describe('EditorMenubar', () => {
  let editor: Editor;

  beforeEach(() => {
    editor = new Editor({
      extensions: [StarterKit],
      content: '',
    });
  });

  afterEach(() => {
    editor.destroy();
  });

  const renderComponent = () => render(<EditorMenubar editor={editor} />);

  it('toggles bold on button click', () => {
    const { getByTestId } = renderComponent();
    const boldButton = getByTestId('toggle-bold');

    fireEvent.click(boldButton);

    expect(editor.isActive('bold')).toBeTruthy();
  });

  it('toggles italic on button click', () => {
    const { getByTestId } = renderComponent();
    const italicButton = getByTestId('toggle-italic');

    fireEvent.click(italicButton);

    expect(editor.isActive('italic')).toBeTruthy();
  });

  it('toggles strike on button click', () => {
    const { getByTestId } = renderComponent();
    const strikeButton = getByTestId('toggle-strike');

    fireEvent.click(strikeButton);

    expect(editor.isActive('strike')).toBeTruthy();
  });

  test('toggles code on button click', () => {
    const { getByTestId } = render(<EditorMenubar editor={editor} />);
    fireEvent.click(getByTestId('toggle-code'));
    expect(editor.isActive('code')).toBe(true);
  });

  test('sets paragraph on button click', () => {
    const { getByTestId } = render(<EditorMenubar editor={editor} />);
    fireEvent.click(getByTestId('toggle-paragraph'));
    expect(editor.isActive('paragraph')).toBe(true);
  });

  test('toggles heading level 1 on button click', () => {
    const { getByTestId } = render(<EditorMenubar editor={editor} />);
    fireEvent.click(getByTestId('toggle-heading-1'));
    expect(editor.isActive('heading', { level: 1 })).toBe(true);
  });
});
