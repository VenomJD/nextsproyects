'use client';

import * as monaco from 'monaco-editor';
import React, { useEffect, useRef, useState } from 'react';
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker';
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker';
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker';

window.MonacoEnvironment = {
  getWorker: function (workerId, label) {
    if (label === 'html') return new HtmlWorker();
    if (label === 'css') return new CssWorker();
    if (label === 'typescript' || label === 'javascript') return new TsWorker();
    return null;
  }
};



export default function Home() {
  const htmlRef = useRef(null);
  const cssRef = useRef(null);
  const jsRef = useRef(null);
  const iframeRef = useRef(null);

  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');

  useEffect(() => {
    if (htmlRef.current) {
      const htmlEditor = monaco.editor.create(htmlRef.current, {
        value: '<!-- Write your HTML here -->',
        language: 'html',
        theme: 'vs-dark',
      });

      htmlEditor.onDidChangeModelContent(() => {
        setHtmlCode(htmlEditor.getValue());
      });
    }

    if (cssRef.current) {
      const cssEditor = monaco.editor.create(cssRef.current, {
        value: '/* Write your CSS here */',
        language: 'css',
        theme: 'vs-dark',
      });

      cssEditor.onDidChangeModelContent(() => {
        setCssCode(cssEditor.getValue());
      });
    }

    if (jsRef.current) {
      const jsEditor = monaco.editor.create(jsRef.current, {
        value: '// Write your JavaScript here',
        language: 'javascript',
        theme: 'vs-dark',
      });

      jsEditor.onDidChangeModelContent(() => {
        setJsCode(jsEditor.getValue());
      });
    }
  }, []);

  // Combinar HTML, CSS, y JavaScript en un solo documento
  const generateSrcDoc = () => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
        <script>${jsCode}<\/script>
      </body>
      </html>
    `;
  };

  // Actualizar el iframe cada vez que cambien los valores de los editores
  useEffect(() => {
    if (iframeRef.current) {
      const srcDocContent = generateSrcDoc();
      iframeRef.current.srcdoc = srcDocContent;
    }
  }, [htmlCode, cssCode, jsCode]);

  return (
     
          <div className="grid" >
      
          <div className="content" ref={htmlRef} id="html"></div>
     
          <div className="content" ref={cssRef} id="css"></div> 
      
          <div className="content" ref={jsRef} id="js"></div>
      
          <iframe ref={iframeRef} id="output" title="Output"></iframe>
          </div>
      
      

   
    )}

