export interface Option {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
  withCount?: boolean;
}

// 数据库表类型定义

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  cover_image: string | null;
  category: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserCase {
  id: string;
  title: string;
  description: string;
  scenario: string | null;
  image_url: string | null;
  video_url: string | null;
  published: boolean;
  created_at: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string | null;
  file_url: string;
  file_type: string | null;
  file_size: string | null;
  download_count: number;
  created_at: string;
}

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  organization: string | null;
  message: string;
  contact_type: string | null;
  created_at?: string;
}
