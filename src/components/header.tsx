"use client";

import { useState, useEffect } from 'react';
import { ShieldCheck, LogOut, Settings, Code, User, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useWallet } from '@/context/wallet-context';

export function Header() {
  const { isConnected, userAddress, connectWallet, disconnectWallet } = useWallet();
  const [isMounted, setIsMounted] = useState(false);
  
  // Theme state must be managed carefully to avoid hydration mismatch
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = storedTheme || 'dark';
    setTheme(initialTheme);
    if (initialTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  if (!isMounted) {
    // Render a placeholder or null on the server to avoid hydration mismatch
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
                <div className="mr-4 flex items-center">
                    <ShieldCheck className="h-6 w-6 mr-2 text-primary" />
                    <h1 className="text-lg font-bold font-headline">TrustLayer</h1>
                </div>
            </div>
        </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <ShieldCheck className="h-6 w-6 mr-2 text-primary" />
          <h1 className="text-lg font-bold font-headline">TrustLayer</h1>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="/dashboard" className="text-foreground/80 transition-colors hover:text-foreground">Dashboard</a>
            <a href="#" className="text-foreground/60 transition-colors hover:text-foreground/80">Developers</a>
            <a href="#" className="text-foreground/60 transition-colors hover:text-foreground/80">About</a>
          </nav>
          <div className="flex items-center space-x-2">
            {isConnected ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" className="relative h-9 w-9 rounded-full">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src="https://placehold.co/100x100.png" alt="User Avatar" data-ai-hint="user avatar" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">Wallet Connected</p>
                      <p className="text-xs leading-none text-muted-foreground truncate">{userAddress}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Code className="mr-2 h-4 w-4" />
                    <span>API Keys</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={disconnectWallet}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Disconnect</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={connectWallet} className="bg-accent text-accent-foreground hover:bg-accent/90">
                Connect Wallet
              </Button>
            )}
             <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
