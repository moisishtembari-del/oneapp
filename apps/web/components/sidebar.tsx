'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar, Settings, BarChart3, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Calendar', href: '/calendar', icon: Calendar },
  { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
  { name: 'Quick Add', href: '/quick-add', icon: Zap },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-border bg-card p-6">
      <div className="mb-12">
        <h1 className="text-2xl font-bold text-accent">OneApp</h1>
        <p className="text-xs text-muted-foreground">v0.1.0</p>
      </div>

      <nav className="space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              )}
            >
              <Icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
