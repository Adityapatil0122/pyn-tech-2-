
import { ReactNode } from 'react';

export interface Solution {
  title: string;
  description: string;
  icon: string;
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
  solutions: Solution[];
}
