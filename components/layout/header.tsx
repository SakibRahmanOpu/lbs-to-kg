'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Weight,
  BarChart,
  Thermometer,
  Zap,
  Clock,
  Database,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-emerald-800 text-white w-full py-2">
      <header className="bg-emerald-800 text-white w-full py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Weight className="h-6 w-6" />
              <Link href="/" className="text-xl font-bold">
                LbstoKg<span className="text-emerald-300">.org</span>
              </Link>
            </div>
            {/* <div className="hidden md:flex space-x-2">
              <Button
                variant="ghost"
                className="text-white hover:bg-emerald-700"
              >
                Sign In
              </Button>
              <Button className="bg-emerald-600 hover:bg-emerald-500">
                Sign Up
              </Button>
            </div> */}
          </div>
        </div>
      </header>
    </header>
  );
}
