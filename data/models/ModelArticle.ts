export interface ModelArticle {
  title?: string;
  summary?: string;
  content?: string[];
  category?: string;
  tags?: string[];
  author?: string;
  assets?: string[];
  template_id?: number;
}

export const TEMPLATE_ID = {
  one: 1,
  two: 2,
};
