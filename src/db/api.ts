import { supabase } from './supabase';
import type { BlogPost, UserCase, Resource, ContactSubmission } from '@/types';

// 博客文章相关API
export const blogApi = {
  // 获取所有已发布的博客文章
  async getPublishedPosts(): Promise<BlogPost[]> {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  // 根据ID获取博客文章
  async getPostById(id: string): Promise<BlogPost | null> {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .maybeSingle();
    
    if (error) throw error;
    return data;
  },

  // 根据分类获取博客文章
  async getPostsByCategory(category: string): Promise<BlogPost[]> {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .eq('category', category)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  // 获取最新的N篇博客文章
  async getLatestPosts(limit: number = 3): Promise<BlogPost[]> {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })
      .limit(limit);
    
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  }
};

// 用户案例相关API
export const caseApi = {
  // 获取所有已发布的用户案例
  async getPublishedCases(): Promise<UserCase[]> {
    const { data, error } = await supabase
      .from('user_cases')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  // 根据ID获取用户案例
  async getCaseById(id: string): Promise<UserCase | null> {
    const { data, error } = await supabase
      .from('user_cases')
      .select('*')
      .eq('id', id)
      .maybeSingle();
    
    if (error) throw error;
    return data;
  }
};

// 资源相关API
export const resourceApi = {
  // 获取所有资源
  async getAllResources(): Promise<Resource[]> {
    const { data, error } = await supabase
      .from('resources')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  // 增加下载次数
  async incrementDownloadCount(id: string): Promise<void> {
    const { error } = await supabase.rpc('increment_download_count', { resource_id: id });
    if (error) throw error;
  }
};

// 联系表单相关API
export const contactApi = {
  // 提交联系表单
  async submitContact(submission: ContactSubmission): Promise<void> {
    const { error } = await supabase
      .from('contact_submissions')
      .insert([submission]);
    
    if (error) throw error;
  }
};
