'use client';

import React, { useState } from 'react';
import EditorComponent from '../components/EditorComponent';
import PreviewIframe from '../components/PreviewIframe';

export default function Home() {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');

  return (
    <div className="grid">
      <EditorComponent
        className='editor html'
        language="html"
        defaultValue="<!-- Write your HTML here -->"
        onChange={setHtmlCode}
      />
      <EditorComponent
        className='editor css'
        language="css"
        defaultValue="/* Write your CSS here */"
        onChange={setCssCode}
      />
      <EditorComponent
        className='editor js'
        language="typescript"
        defaultValue="// Write your JavaScript here"
        onChange={setJsCode}
      />
      <PreviewIframe htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />
    </div>
  );
}

