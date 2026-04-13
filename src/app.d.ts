import { ComponentType, SvelteComponent } from "svelte";

declare global {
	namespace App {
		
	}

	declare module '*.svg?component' {
		const content: ComponentType<SvelteComponent>;
		export default content;
	}

	declare module '*.svg' {
		const content: string;
		export default content;
	}
}

export {};