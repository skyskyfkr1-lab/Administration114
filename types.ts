
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

export interface ExpertProfile {
  name: string;
  role: string;
  image: string;
  bio: string[];
  history: string[];
}

export interface NavItem {
  label: string;
  path: string;
}
