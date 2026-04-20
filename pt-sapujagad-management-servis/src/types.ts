export type ViewState = 'home' | 'about' | 'services' | 'recruitment' | 'contact';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Career {
  id: string;
  title: string;
  location: string;
  type: string;
}
