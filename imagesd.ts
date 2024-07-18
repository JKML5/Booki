declare module '*.svg' {
  import React from 'react';
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const svgUrl: string; // Renommé pour éviter les conflits
  export default svgUrl;
}

declare module '*.png' {
  const pngUrl: string; // Renommé pour éviter les conflits
  export default pngUrl;
}
