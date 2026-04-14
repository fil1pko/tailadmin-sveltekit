type Theme = "light" | "dark";

class ThemeState {
    current = $state<Theme>("light");

    constructor() {
          if (typeof localStorage !== 'undefined') {
               const saved = localStorage.getItem("theme") as Theme;
               this.current = saved || "light";
               this.applyToDOM();
          }
    }

     toggle() {
          this.current = this.current === "light" ? "dark" : "light";
          localStorage.setItem("theme", this.current);
          this.applyToDOM();
     }

     private applyToDOM() {
          if (typeof document !== 'undefined') {
               if (this.current === "dark") {
                    document.documentElement.classList.add("dark");
               } else {
                    document.documentElement.classList.remove("dark");
               }
          }
     }
}

export const themeState = new ThemeState();