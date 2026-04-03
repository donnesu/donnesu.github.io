import React from "react";
import { NotionRenderer } from "react-notion-x";
import { Code } from "react-notion-x/third-party/code";
import { Collection } from "react-notion-x/third-party/collection";
import { Equation } from "react-notion-x/third-party/equation";
import { Modal } from "react-notion-x/third-party/modal";
import { Pdf } from "react-notion-x/third-party/pdf";

import "react-notion-x/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";

const components = {
  Code,
  Collection,
  Equation,
  Modal,
  Pdf,
};

export default function NotionContent({ recordMap, fullPage = false, darkMode = false }) {
  if (!recordMap) {
    return null;
  }

  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={fullPage}
      darkMode={darkMode}
      components={components}
    />
  );
}
