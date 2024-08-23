import Image from "next/image";

export default function Home() {
  return (
    <div className="grid" >
      
          <div className="content" ref={htmlRef} id="html"></div>
     
          <div className="content" ref={cssRef} id="css"></div> 
      
          <div className="content" ref={jsRef} id="js"></div>
      
          <iframe ref={iframeRef} id="output" title="Output"></iframe>
          </div>
  );
}
