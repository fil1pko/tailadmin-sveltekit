import { browser } from '$app/environment';

class SidebarState {
     isExpanded = $state(true);
     isMobileOpen = $state(false);
     isHovered = $state(false);
     activeItem = $state<string | null>(null);
     openSubmenu = $state<string | null>(null);
     isMobile = $state(false);

     constructor() {
          if (browser) {
               this.handleResize();
               window.addEventListener("resize", () => this.handleResize());
          }
     }

     private handleResize() {
          this.isMobile = window.innerWidth < 768;
          if (!this.isMobile) {
               this.isMobileOpen = false;
          }
     }

     get effectiveIsExpanded() {
          return this.isMobile ? false : this.isExpanded;
     }

     toggleSidebar = () => {
          this.isExpanded = !this.isExpanded;
     };

     toggleMobileSidebar = () => {
          this.isMobileOpen = !this.isMobileOpen;
     };

     toggleSubmenu = (item: string) => {
          this.openSubmenu = this.openSubmenu === item ? null : item;
     };
    
     setIsHovered = (hovered: boolean) => {
          this.isHovered = hovered;
     };

     setActiveItem = (item: string | null) => {
          this.activeItem = item;
     };
}

export const sidebarContext = new SidebarState();