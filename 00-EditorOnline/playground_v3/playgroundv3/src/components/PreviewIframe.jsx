import React, { useEffect, useRef } from 'react';

export default function PreviewIframe({ htmlCode, cssCode, jsCode }) {
  const iframeRef = useRef(null);

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

  useEffect(() => {
    if (iframeRef.current) {
      const srcDocContent = generateSrcDoc();
      iframeRef.current.srcdoc = srcDocContent;
    }
  }, [htmlCode, cssCode, jsCode]);

  return <iframe ref={iframeRef} title="Output" style={{ width: '100%', height: '100%' }}></iframe>;
}
