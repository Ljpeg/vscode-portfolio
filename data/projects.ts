export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Mastermind',
    description:
      'Engineered a Flask-based backend, implementing game logic, API endpoints, and state management.',
    logo: '/logos/driwwwle.svg',
    link: 'https://github.com/itsnitinr/driwwwle',
    slug: 'driwwwle',
  },
  
];
