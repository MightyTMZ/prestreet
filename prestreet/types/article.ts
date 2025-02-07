export interface Article {
  id: number;
  title: string;
  summary: string;
  image: string;
  category: string;
  originalSourceURL?: string; // for original source
  tag: string;
  originalSource: string;
  readingTime: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}