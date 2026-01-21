-- Copy and paste this into the SQL Editor in your Supabase Dashboard

-- 1. Enable UUID extension
create extension if not exists "uuid-ossp";

-- 2. Create Articles Table
create table if not exists public.articles (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text unique not null,
  content text,
  excerpt text,
  image text,
  category text,
  status text default 'Draft',
  author text,
  tags text[],
  views integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Create Categories Table
create table if not exists public.categories (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  slug text unique not null,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Create Settings Table
create table if not exists public.site_settings (
  id uuid default uuid_generate_v4() primary key,
  key text unique not null,
  value text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 5. Enable Row Level Security (RLS)
alter table public.articles enable row level security;
alter table public.categories enable row level security;
alter table public.site_settings enable row level security;

-- 6. Create Security Policies
-- Articles: Everyone can read, only admin can write
create policy "Public articles are viewable by everyone" 
on public.articles for select using (true);

create policy "Admins can insert articles" 
on public.articles for insert with check (auth.role() = 'authenticated');

create policy "Admins can update articles" 
on public.articles for update using (auth.role() = 'authenticated');

create policy "Admins can delete articles" 
on public.articles for delete using (auth.role() = 'authenticated');

-- Categories: Everyone can read, only admin can write
create policy "Public categories are viewable by everyone" 
on public.categories for select using (true);

create policy "Admins can manage categories" 
on public.categories for all using (auth.role() = 'authenticated');

-- Settings: Everyone can read, only admin can write
create policy "Public settings are viewable by everyone" 
on public.site_settings for select using (true);

create policy "Admins can manage settings" 
on public.site_settings for all using (auth.role() = 'authenticated');

-- 7. Create Storage Bucket for Images
insert into storage.buckets (id, name, public) values ('images', 'images', true);

create policy "Public Access" 
on storage.objects for select using ( bucket_id = 'images' );

create policy "Auth Upload" 
on storage.objects for insert with check ( bucket_id = 'images' and auth.role() = 'authenticated' );
