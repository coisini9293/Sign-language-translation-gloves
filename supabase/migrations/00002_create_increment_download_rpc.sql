/*
# 创建增加下载次数的RPC函数

## 说明
创建一个RPC函数用于原子性地增加资源的下载次数

## 函数
- increment_download_count: 增加指定资源的下载次数
*/

CREATE OR REPLACE FUNCTION increment_download_count(resource_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE resources
  SET download_count = download_count + 1
  WHERE id = resource_id;
END;
$$;