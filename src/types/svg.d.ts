// Allow importing SVGs as React components using ?react
declare module '*.svg?react' {
    import * as React from 'react';
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
  }
  
  // Allow importing SVGs as static assets (e.g. <img src={...} />)
  declare module '*.svg' {
    const content: string;
    export default content;
  }
  