/*
# 创建手语翻译手套项目数据库表

## 1. 新建表

### blog_posts（博客文章表）
- `id` (uuid, 主键, 默认生成)
- `title` (text, 非空) - 文章标题
- `content` (text, 非空) - 文章内容
- `excerpt` (text) - 文章摘要
- `cover_image` (text) - 封面图片URL
- `category` (text) - 分类（项目进展/团队随笔/行业洞察/活动参与）
- `published` (boolean, 默认false) - 是否发布
- `created_at` (timestamptz, 默认now())
- `updated_at` (timestamptz, 默认now())

### user_cases（用户案例表）
- `id` (uuid, 主键, 默认生成)
- `title` (text, 非空) - 案例标题
- `description` (text, 非空) - 案例描述
- `scenario` (text) - 应用场景
- `image_url` (text) - 案例图片URL
- `video_url` (text) - 案例视频URL
- `published` (boolean, 默认false) - 是否发布
- `created_at` (timestamptz, 默认now())

### resources（资源下载表）
- `id` (uuid, 主键, 默认生成)
- `title` (text, 非空) - 资源标题
- `description` (text) - 资源描述
- `file_url` (text, 非空) - 文件URL
- `file_type` (text) - 文件类型（PDF/PPT等）
- `file_size` (text) - 文件大小
- `download_count` (integer, 默认0) - 下载次数
- `created_at` (timestamptz, 默认now())

### contact_submissions（联系表单提交表）
- `id` (uuid, 主键, 默认生成)
- `name` (text, 非空) - 姓名
- `email` (text, 非空) - 邮箱
- `organization` (text) - 组织/机构
- `message` (text, 非空) - 留言内容
- `contact_type` (text) - 联系类型（合作/咨询/其他）
- `created_at` (timestamptz, 默认now())

## 2. 安全策略
- 所有表不启用RLS，允许公开读取
- blog_posts、user_cases、resources表允许公开读取已发布内容
- contact_submissions表允许任何人插入数据

## 3. 说明
- 这是一个公开展示网站，内容面向所有访客
- 管理功能通过后台界面实现，所有人都可以管理
*/

-- 创建博客文章表
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  excerpt text,
  cover_image text,
  category text,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 创建用户案例表
CREATE TABLE IF NOT EXISTS user_cases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  scenario text,
  image_url text,
  video_url text,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- 创建资源下载表
CREATE TABLE IF NOT EXISTS resources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  file_url text NOT NULL,
  file_type text,
  file_size text,
  download_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- 创建联系表单提交表
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  organization text,
  message text NOT NULL,
  contact_type text,
  created_at timestamptz DEFAULT now()
);

-- 插入示例博客文章
INSERT INTO blog_posts (title, content, excerpt, category, published) VALUES
('手语翻译手套项目正式启动', '经过数月的筹备和研发，我们的手语翻译手套项目今天正式启动。这个项目源于一次志愿者活动中的深刻体验，我们看到了听障人士在日常沟通中面临的巨大挑战。我们决心用科技的力量，为他们搭建一座通往有声世界的桥梁。

项目的核心目标是开发一款低成本、高精度的实时手语翻译设备。通过弯曲传感器和陀螺仪采集手部动作数据，利用ESP32主控板进行实时处理，最终通过语音合成模块将手语转换为语音。

我们的愿景是让每一位听障人士都能负担得起这项技术，让沟通不再成为障碍。', '手语翻译手套项目正式启动，致力于用科技消除沟通障碍', '项目进展', true),

('技术突破：识别准确率达到92%', '经过团队的不懈努力，我们的手语识别算法取得了重大突破。在最新的测试中，系统对常用手语的识别准确率已经达到92%，这一成绩超出了我们的预期。

这个突破得益于我们采用的多传感器融合技术。通过结合弯曲传感器和陀螺仪的数据，我们能够更准确地捕捉手部的细微动作。同时，我们优化了算法模型，提高了实时处理的效率。

接下来，我们将继续优化算法，目标是将准确率提升到95%以上。', '手语识别准确率突破92%，技术创新取得重大进展', '项目进展', true),

('走进特殊教育学校：用户测试反馈', '上周，我们带着原型设备走进了本地的特殊教育学校，与听障学生和老师们进行了深入交流。这次用户测试给了我们很多宝贵的反馈。

一位特教老师告诉我们："这个设备如果能普及，将会极大地改善听障学生的学习体验。他们在课堂上提问会更加自信。"一位学生在试用后兴奋地表示："终于可以让更多人听懂我说的话了！"

这些反馈让我们更加坚定了项目的意义。我们会继续改进产品，让它真正成为听障人士的好帮手。', '走进特殊教育学校，收集用户真实反馈', '活动参与', true);

-- 插入示例用户案例
INSERT INTO user_cases (title, description, scenario, published) VALUES
('听障儿童的课堂提问', '小明是一名8岁的听障儿童，在使用手语翻译手套后，他可以在课堂上自信地举手提问。老师和同学们都能通过语音清楚地听到他的问题，这让小明感到前所未有的被理解和尊重。', '教育场景', true),

('聋哑人士的医院就医', '李女士是一位聋哑人士，以前去医院看病时，沟通一直是个大问题。有了手语翻译手套后，她可以清楚地向医生描述自己的症状，医生也能准确理解她的需求，大大提高了就医效率。', '医疗场景', true),

('听障员工的职场沟通', '张先生是一名听障员工，在公司会议上，他使用手语翻译手套发表自己的观点和建议。同事们都能听到他的声音，这让他更好地融入团队，也让公司受益于他的专业见解。', '职场场景', true);

-- 插入示例资源
INSERT INTO resources (title, description, file_url, file_type, file_size) VALUES
('项目简介PPT', '手语翻译手套项目的完整介绍，包括技术原理、应用场景、发展规划等', 'https://example.com/project-intro.pdf', 'PDF', '2.5MB'),
('技术白皮书', '详细的技术实现方案和算法说明', 'https://example.com/technical-whitepaper.pdf', 'PDF', '3.8MB'),
('宣传手册', '项目宣传资料，适合打印分发', 'https://example.com/brochure.pdf', 'PDF', '1.2MB');