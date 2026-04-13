<script lang="ts">
     type AspectRatio = "16:9" | "4:3" | "21:9" | "1:1";

     interface Props {
          videoId: string;
          aspectRatio?: AspectRatio;
          title?: string;
          class?: string; 
     }

     let {
          videoId,
          aspectRatio = "16:9",
          title = "YouTube video",
          class: className = ""
     }: Props = $props();

     const aspectRatioMap = {
          "16:9": "aspect-video",
          "4:3": "aspect-[4/3]",
          "21:9": "aspect-[21/9]",
          "1:1": "aspect-square",
     };

     let aspectRatioClass = $derived(aspectRatioMap[aspectRatio]);
</script>

<div class="overflow-hidden rounded-lg {aspectRatioClass} {className}">
     <iframe
          src="https://www.youtube.com/embed/{videoId}"
          {title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="w-full h-full"
     ></iframe>
</div>