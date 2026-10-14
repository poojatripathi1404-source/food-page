import React from 'react';
import { useRouter } from './router';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ to, children, className = '', onClick, ...props }) => {
  const { navigate, route } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    // Don't intercept cmd/ctrl clicks (open in new tab)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    
    e.preventDefault();
    navigate(to);
  };

  const isActive = route.pathname === to;

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`${className} ${isActive ? 'aria-current="page"' : ''}`}
      {...props}
    >
      {children}
    </a>
  );
};
