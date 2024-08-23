import React from 'react';
import Editor from '@monaco-editor/react';

export default function EditorComponent({ language, defaultValue, onChange, className }) {
  return (
    <Editor
      className={className}
      height="100%"
      language={language}
      defaultValue={defaultValue}
      theme="vs-dark"
      onChange={onChange}
    />
  );
}
