'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar, Settings, BarChart3, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Calendario', href: '/calendar', icon: Calendar },
  { name: 'Pannello di controllo', href: '/dashboard', icon: BarChart3 },
  { name: 'Aggiunta rapida', href: '/quick-add', icon: Zap },
  { name: 'Impostazioni', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 glass-sidebar h-screen p-6 flex flex-col relative z-20 select-none">
      
      {/* Intestazione dell'applicazione con Logo al Neon */}
      <div className="mb-10 pl-2">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">
            OneApp
          </h1>
          <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />
        </div>
        <p className="text-[10px] font-mono tracking-widest text-cyan-400/50 uppercase mt-0.5">
          Release v0.1.0
        </p>
      </div>

      {/* Menu di Navigazione */}
      <nav className="space-y-1.5 flex-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 relative overflow-hidden',
                isActive
                  ? 'text-white bg-gradient-to-r from-cyan-500/20 to-blue-500/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] before:absolute before:left-0 before:top-3 before:bottom-3 before:w-1 before:rounded-full before:bg-cyan-400 before:shadow-[0_0_10px_#22d3ee]'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
              )}
            >
              {/* Effetto bagliore sfocato dietro l'icona quando attiva */}
              <div className={cn(
                "absolute -left-4 w-12 h-12 rounded-full blur-xl transition-opacity duration-300 pointer-events-none -z-10",
                isActive ? "bg-cyan-400/20 opacity-100" : "bg-transparent opacity-0 group-hover:opacity-40 group-hover:bg-white/5"
              )} />

              {/* Icona del menu */}
              <Icon 
                className={cn(
                  "h-4 w-4 transition-transform duration-300 group-hover:scale-110",
                  isActive ? "text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]" : "text-slate-400 group-hover:text-cyan-300"
                )} 
              />
              
              {/* Nome del menu */}
              <span className="relative z-10">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer minimalista della Sidebar */}
      <div className="pt-4 border-t border-white/5 text-[11px] text-slate-500 font-mono pl-2">
        © 2026 Enterprise Inc.
      </div>
    </aside>
  );
}
