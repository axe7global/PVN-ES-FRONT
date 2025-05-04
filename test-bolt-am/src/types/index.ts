export interface Module {
  id: number;
  title: string;
  description: string;
  image: string;
  type: 'video' | 'book';
  content: string[] | string; // Array of YouTube IDs or Gamma App URL
}

export interface AppState {
  userEmail: string;
  isLoggedIn: boolean;
}