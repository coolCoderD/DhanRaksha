
import React, { createContext, useContext, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

// Create context for sidebar state
const SidebarContext = createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  open: false,
  setOpen: () => {},
});

// Provider component
export function SidebarProvider({
  children,
  defaultOpen = true,
}: {
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const isMobile = useMobile();

  // Auto-close on mobile
  useEffect(() => {
    if (isMobile) {
      setOpen(false);
    } else {
      setOpen(defaultOpen);
    }
  }, [isMobile, defaultOpen]);

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

// Hook to use sidebar context
export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

// Main sidebar component
export function Sidebar({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { open } = useSidebar();
  
  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-50 flex h-full w-[280px] flex-col border-r bg-sidebar-background text-sidebar-foreground transition-transform duration-300 ease-in-out",
        open ? "translate-x-0" : "-translate-x-[280px]",
        className
      )}
    >
      {children}
    </aside>
  );
}

// Sidebar header
export function SidebarHeader({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex h-14 items-center border-b px-4 py-2",
        className
      )}
    >
      {children}
    </div>
  );
}

// Sidebar content
export function SidebarContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex-1 overflow-auto p-4", className)}>
      {children}
    </div>
  );
}

// Sidebar footer
export function SidebarFooter({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex items-center border-t p-4",
        className
      )}
    >
      {children}
    </div>
  );
}

// Sidebar group
export function SidebarGroup({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("space-y-2 py-2", className)}>
      {children}
    </div>
  );
}

// Sidebar group label
export function SidebarGroupLabel({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "px-2 text-xs font-medium text-sidebar-foreground/60",
        className
      )}
    >
      {children}
    </div>
  );
}

// Sidebar group content
export function SidebarGroupContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("space-y-1", className)}>
      {children}
    </div>
  );
}

// Sidebar menu
export function SidebarMenu({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <nav className={cn("space-y-1", className)}>
      {children}
    </nav>
  );
}

// Sidebar menu item
export function SidebarMenuItem({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("relative", className)}>
      {children}
    </div>
  );
}

// Sidebar menu button
export const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
  }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? React.Fragment : "button";
  return (
    <Comp
      ref={ref}
      className={cn(
        "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus:bg-sidebar-accent focus:text-sidebar-accent-foreground focus:outline-none",
        className
      )}
      {...props}
    />
  );
});
SidebarMenuButton.displayName = "SidebarMenuButton";

// Sidebar trigger
export function SidebarTrigger({
  className,
}: {
  className?: string;
}) {
  const { open, setOpen } = useSidebar();
  
  return (
    <button
      onClick={() => setOpen(!open)}
      className={cn(
        "fixed left-4 top-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-md border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background lg:hidden",
        open && "left-[calc(280px+1rem)]",
        className
      )}
    >
      {open ? <X size={18} /> : <Menu size={18} />}
      <span className="sr-only">Toggle sidebar</span>
    </button>
  );
}
