import { ReactNode } from "react";
import { BottomNav } from "./BottomNav";

interface MobileLayoutProps {
  children: ReactNode;
  showBottomNav?: boolean;
}

export function MobileLayout({ children, showBottomNav = true }: MobileLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-md h-screen bg-white shadow-2xl overflow-hidden relative flex flex-col">
        <main className={`flex-1 overflow-y-auto ${showBottomNav ? "pb-16" : ""}`}>
          {children}
        </main>
        {showBottomNav && <BottomNav />}
      </div>
    </div>
  );
}
