<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  interface Props {
    mapColor?: string;
  }

  let { mapColor = '#D0D5DD' }: Props = $props();

  let mapContainer: HTMLDivElement;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mapInstance: any;

  const markers = [
    { name: 'United States', coords: [37.2580397, -104.657039] },
    { name: 'India', coords: [20.7504374, 73.7276105] },
    { name: 'United Kingdom', coords: [53.613, -11.6368] },
    { name: 'Sweden', coords: [-25.0304388, 115.2092761] },
  ];

  onMount(async () => {
    await import('jsvectormap/dist/css/jsvectormap.css');
    const jsVectorMap = (await import('jsvectormap')).default;
    await import('jsvectormap/dist/maps/world.js');
    

    mapInstance = new jsVectorMap({
      selector: mapContainer,
      map: 'world',
      backgroundColor: 'transparent',
      zoomOnScroll: false,
      zoomMax: 12,
      zoomMin: 1,
      zoomAnimate: true,
      zoomStep: 1.5,
      markersSelectable: true,

      markers,

      markerStyle: {
        initial: {
          fill: '#465FFF',
          r: 4,
          stroke: '#383f47',
          strokeWidth: 1,
        },
        hover: {
          fill: '#3451e0',
          stroke: 'white',
          strokeWidth: 2,
          cursor: 'pointer',
        },
        selected: {
          fill: '#465FFF',
        },
      },

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onMarkerTooltipShow(_event: any, tooltip: any, index: number) {
        tooltip.text(markers[index].name);
      },

      regionStyle: {
        initial: {
          fill: mapColor,
          fillOpacity: 1,
          fontFamily: 'Outfit',
          stroke: 'none',
          strokeWidth: 0,
          strokeOpacity: 0,
        },
        hover: {
          fillOpacity: 0.7,
          cursor: 'pointer',
          fill: '#465fff',
          stroke: 'none',
        },
        selected: {
          fill: '#465FFF',
        },
        selectedHover: {},
      },

      regionLabelStyle: {
        initial: {
          fill: '#35373e',
          fontWeight: '500',
          fontSize: '13px',
          stroke: 'none',
        },
        hover: {},
        selected: {},
        selectedHover: {},
      },
    });
  });

  onDestroy(() => {
    mapInstance?.destroy?.();
  });
</script>

<div bind:this={mapContainer} class="h-full w-full"></div>