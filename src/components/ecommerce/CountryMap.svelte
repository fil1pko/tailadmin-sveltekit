<script lang="ts">
     import { onMount, onDestroy } from 'svelte';

     interface Props {
          mapColor?: string;
     }

     let { mapColor = '#D0D5DD' }: Props = $props();

     let mapEl: HTMLDivElement;
     let map: { destroy: () => void } | null = null;

  onMount(async () => {
     const jsVectorMap = (await import('jsvectormap')).default;
     await import('jsvectormap/dist/maps/world-mill');

    map = new jsVectorMap({
      selector: mapEl,
      map: 'world_mill',
      backgroundColor: 'transparent',
      zoomOnScroll: false,
      zoomMax: 12,
      zoomMin: 1,
      zoomAnimate: true,
      zoomStep: 1.5,
      markersSelectable: true,
      markers: [
        {
          coords: [37.2580397, -104.657039],
          name: 'United States',
          style: {
            fill: '#465FFF',
            borderWidth: 1,
            borderColor: 'white',
            stroke: '#383f47',
          },
        },
        {
          coords: [20.7504374, 73.7276105],
          name: 'India',
          style: {
            fill: '#465FFF',
            borderWidth: 1,
            borderColor: 'white',
          },
        },
        {
          coords: [53.613, -11.6368],
          name: 'United Kingdom',
          style: {
            fill: '#465FFF',
            borderWidth: 1,
            borderColor: 'white',
          },
        },
        {
          coords: [-25.0304388, 115.2092761],
          name: 'Australia',
          style: {
            fill: '#465FFF',
            borderWidth: 1,
            borderColor: 'white',
            strokeOpacity: 0,
          },
        },
      ],
      markerStyle: {
        initial: {
          fill: '#465FFF',
          r: 4,
        },
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
          fontWeight: 500,
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
    map?.destroy();
  });
</script>

<div bind:this={mapEl} style="width: 100%; height: 100%;"></div>