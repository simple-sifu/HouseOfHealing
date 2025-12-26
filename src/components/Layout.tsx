import { ReactNode } from 'react';
import { NavSidebar } from './NavSidebar';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

export function Layout({ children, showSidebar = true }: LayoutProps) {
  return (
    <div className="layout">
      {showSidebar && <NavSidebar />}
      <main className={showSidebar ? 'main-with-sidebar' : 'main-full'}>
        {children}
      </main>
    </div>
  );
}

