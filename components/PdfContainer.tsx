import React from "react";

function PdfContainer() {
  return (
    <div className="w-[100%] ">
      <div className="bg-[#0411042f] min-h-screen   paddings  blurEdge  shadow-4xl">
        <div className="relative z-[2]">
          <h1>Parent Component</h1>
          <iframe  className="w-[100%] h-screen" src="iframe-content.html" title="Iframe Example"></iframe>
        </div>
      </div>
    </div>
  );
}

export default PdfContainer;
