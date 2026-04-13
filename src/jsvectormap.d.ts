declare module 'jsvectormap' {
     const JsVectorMap: new (options: Record<string, unknown>) => {
          destroy: () => void;
          updateSeries: (series: unknown) => void;
     };
     export default JsVectorMap;
}

declare module 'jsvectormap/dist/maps/world-mill' {
     const map: unknown;
     export default map;
}
