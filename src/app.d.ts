import type { ComponentType, SvelteComponent } from "svelte";

declare module '*.svg?component' {
     const content: ComponentType<SvelteComponent>;
     export default content;
}

declare module '*.svg' {
     const content: string;
     export default content;
}

declare global {
     namespace App {
     }
}

export {};