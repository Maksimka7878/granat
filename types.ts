import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  review: string;
  author: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}