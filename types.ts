export enum AppRole {
  ADMIN = 'ADMIN',
  EMPLOYEE = 'EMPLOYEE',
  OWNER = 'OWNER'
}

export interface User {
  username: string;
  role: AppRole;
}

export enum ViewState {
  LOGIN = 'LOGIN',
  WELCOME = 'WELCOME',
  SELECTION = 'SELECTION',
  DASHBOARD = 'DASHBOARD',
  APP_VIEW = 'APP_VIEW'
}

export interface PartnerTheme {
  fontFamily?: string;
  accentColor?: string;
  primaryColor?: string;
  backgroundColor?: string;
  textColor?: string;
}

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'date' | 'time' | 'radio' | 'checkbox';
  options?: string[];
  required?: boolean;
}

export interface Partner {
  Id: number;
  PartnerName: string;
  PartnerNameGenitive?: string;
  Slug: string;
  LogoUrl: string | null;
  PhotoUrl: string | null;
  Theme: PartnerTheme | null;
  HeroHeader: string | null;
  PartnerType?: string;
  Miasto?: string;
  contact_email?: string;
  FormConfig?: {
    fields: FormField[];
  };
}

export interface OrderData {
  parentName: string;
  phone: string;
  email: string;
  childName: string;
  childAge: string;
  birthdayDate: string;
  birthdayTime: string;
  guestsCount: string;
  catering: string;
  extras: string[];
}