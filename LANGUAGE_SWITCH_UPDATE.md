# 语言切换更新说明

## 更新日期：2025-11-22

## 更新概述

本次更新将Product.tsx和Technology.tsx页面的所有内容从中文切换回英文，同时保持之前删除的内容不恢复。

---

## 详细更新内容

### 一、Product.tsx 页面英文化

#### 1.1 页面标题和描述
- **产品介绍** → **Product Introduction**
- **从技术验证到实际应用，我们的产品正在改变听障人士的生活** → **From technical validation to practical application, our product is changing the lives of hearing-impaired individuals**

#### 1.2 技术验证部分
- **技术验证** → **Technical Validation**
- **识别准确率** → **Recognition Accuracy**
- **经过1000+次测试，手语识别准确率稳定在92%以上** → **After 1000+ tests, sign language recognition accuracy remains stable above 92%**
- **响应速度** → **Response Speed**
- **从手势识别到语音输出，平均响应时间小于200毫秒** → **From gesture recognition to voice output, average response time is less than 200 milliseconds**

#### 1.3 资源下载部分
- **资源下载** → **Resource Downloads**
- **项目简介PPT** → **Project Overview PPT**
- **详细介绍手语翻译手套项目的背景、技术方案和应用场景** → **Detailed introduction to the background, technical solutions, and application scenarios of the sign language glove project**
- **技术白皮书** → **Technical Whitepaper**
- **深入分析手语翻译手套的技术原理、算法设计和性能指标** → **In-depth analysis of the technical principles, algorithm design, and performance metrics of the sign language glove**
- **宣传手册** → **Promotional Brochure**
- **面向公众的产品宣传资料，包含产品特点和使用指南** → **Public-facing product promotional materials, including product features and user guides**
- **文件大小** → **File Size**
- **下载** → **Download**

#### 1.4 合作邀请部分
- **寻求合作** → **Seeking Partnerships**
- **我们诚挚邀请学术研究机构、特殊教育学校、企业赞助商和生产制造伙伴与我们合作，共同推动手语翻译技术的发展和普及** → **We sincerely invite academic research institutions, special education schools, corporate sponsors, and manufacturing partners to collaborate with us in promoting the development and popularization of sign language translation technology**
- **成为合作伙伴** → **Become a Partner**
- **了解更多** → **Learn More**

---

### 二、Technology.tsx 页面英文化

#### 2.1 页面标题和描述
- **技术原理** → **Technical Principles**
- **深入了解手语翻译手套的技术原理和实现方案** → **In-depth understanding of the technical principles and implementation solutions of the sign language glove**

#### 2.2 系统总览部分
- **系统总览** → **System Overview**
- **数据采集** → **Data Collection**
- **弯曲传感器和陀螺仪捕捉手部动作** → **Flex sensors and gyroscopes capture hand movements**
- **数据处理** → **Data Processing**
- **ESP32微控制器分析识别手势** → **ESP32 microcontroller analyzes and recognizes gestures**
- **语音输出** → **Voice Output**
- **语音合成模块转换为自然语音** → **Speech synthesis module converts to natural voice**

#### 2.3 数据采集层部分
- **数据采集层** → **Data Collection Layer**
- **弯曲传感器** → **Flex Sensors**
- **每个手指上安装了5个弯曲传感器，实时捕捉每个手指关节的弯曲角度，实现对手指动作的精确识别** → **Five flex sensors are installed on each finger to capture the bending angle of each finger joint in real-time, achieving precise recognition of finger movements**
- **高灵敏度：能够捕捉细微的手指动作** → **High sensitivity: Captures subtle finger movements**
- **快速响应：毫秒级数据采集** → **Fast response: Millisecond-level data collection**
- **耐用性强：可承受100万次以上弯曲** → **Durability: Withstands over 1 million bends**

- **陀螺仪** → **Gyroscope**
- **手背上安装了6轴陀螺仪，捕捉手部的方向和运动轨迹，提供全面的手势信息** → **A 6-axis gyroscope is installed on the back of the hand to capture the orientation and movement trajectory of the hand, providing comprehensive gesture information**
- **3轴加速度计：捕捉手部加速度** → **3-axis accelerometer: Captures hand acceleration**
- **3轴陀螺仪：捕捉手部旋转角度** → **3-axis gyroscope: Captures hand rotation angle**
- **高精度：±0.1°角度精度** → **High precision: ±0.1° angle accuracy**

#### 2.4 处理中心部分
- **处理中心：ESP32微控制器** → **Processing Center: ESP32 Microcontroller**
- **核心特性** → **Core Features**
- **双核处理器：并行处理传感器数据和算法计算** → **Dual-core processor: Parallel processing of sensor data and algorithm computation**
- **低功耗：支持8小时以上连续使用** → **Low power consumption: Supports 8+ hours of continuous use**
- **无线连接：内置WiFi和蓝牙模块** → **Wireless connectivity: Built-in WiFi and Bluetooth modules**
- **丰富接口：支持多种传感器连接** → **Rich interfaces: Supports multiple sensor connections**

- **处理流程** → **Processing Flow**
- **采集传感器数据（弯曲传感器+陀螺仪）** → **Collect sensor data (flex sensors + gyroscope)**
- **数据预处理（滤波、归一化）** → **Data preprocessing (filtering, normalization)**
- **特征提取（手势特征向量）** → **Feature extraction (gesture feature vectors)**
- **模式识别（机器学习算法）** → **Pattern recognition (machine learning algorithms)**
- **结果输出（文本或语音指令）** → **Result output (text or voice commands)**

#### 2.5 算法原理部分
- **算法原理** → **Algorithm Principles**
- **数据预处理** → **Data Preprocessing**
- **原始传感器数据经过滤波和归一化处理，去除噪声和异常值，确保数据质量和稳定性** → **Raw sensor data undergoes filtering and normalization to remove noise and outliers, ensuring data quality and stability**

- **特征提取** → **Feature Extraction**
- **从预处理后的数据中提取关键特征，如手指弯曲角度、手部方向、运动轨迹等，形成手势特征向量** → **Extracts key features from preprocessed data, such as finger bending angles, hand orientation, and movement trajectories, forming gesture feature vectors**

- **模式识别** → **Pattern Recognition**
- **使用机器学习算法（如SVM、神经网络）将手势特征向量与预训练的手语模型进行匹配，识别出对应的手语含义** → **Uses machine learning algorithms (such as SVM, neural networks) to match gesture feature vectors with pre-trained sign language models, recognizing corresponding sign language meanings**

- **结果输出** → **Result Output**
- **将识别出的手语含义转换为文本或语音输出，实现实时沟通** → **Converts recognized sign language meanings into text or voice output, enabling real-time communication**

---

## 保持的删除内容

### Product.tsx
- ✅ 用户满意度卡片（User Satisfaction）- 未恢复
- ✅ 用户反馈section（User Feedback）- 未恢复
- ✅ 保持2列布局（grid-cols-2）

### Technology.tsx
- ✅ 输出模块：语音合成section（Output Module: Speech Synthesis）- 未恢复

---

## 页面结构对照

### Product页面结构
```
Product Introduction
├─ Technical Validation (2列居中)
│  ├─ Recognition Accuracy (92%)
│  └─ Response Speed (<200ms)
├─ Resource Downloads (3列)
│  ├─ Project Overview PPT
│  ├─ Technical Whitepaper
│  └─ Promotional Brochure
└─ Seeking Partnerships
```

### Technology页面结构
```
Technical Principles
├─ System Overview (3步骤流程)
│  ├─ Data Collection
│  ├─ Data Processing
│  └─ Voice Output
├─ Data Collection Layer (2列)
│  ├─ Flex Sensors
│  └─ Gyroscope
├─ Processing Center: ESP32 Microcontroller
│  ├─ Core Features
│  └─ Processing Flow
└─ Algorithm Principles (4个步骤)
   ├─ Data Preprocessing
   ├─ Feature Extraction
   ├─ Pattern Recognition
   └─ Result Output
```

---

## 测试结果

### 功能测试
- ✅ Product页面正常显示
- ✅ Technology页面正常显示
- ✅ 所有英文文本显示正常
- ✅ 技术验证卡片布局正确（2列居中）
- ✅ 响应式布局工作正常
- ✅ 所有链接和按钮功能正常

### 代码质量
- ✅ ESLint检查通过（0 errors, 0 warnings）
- ✅ TypeScript类型检查通过
- ✅ 无控制台错误
- ✅ 代码格式规范

### 内容验证
- ✅ Product.tsx包含3个英文标题
- ✅ Technology.tsx包含3个英文标题
- ✅ User Satisfaction未恢复（0次出现）
- ✅ User Feedback未恢复（0次出现）
- ✅ Output Module未恢复（0次出现）

---

## 文件变更清单

| 文件 | 变更类型 | 主要变更 |
|------|---------|---------|
| `src/pages/Product.tsx` | 语言切换 | 所有中文内容改为英文 |
| `src/pages/Technology.tsx` | 语言切换 | 所有中文内容改为英文 |

---

## 总结

本次更新成功完成了以下目标：

1. ✅ **Product.tsx英文化**：所有内容从中文切换为英文
2. ✅ **Technology.tsx英文化**：所有内容从中文切换为英文
3. ✅ **保持删除内容**：用户满意度、用户反馈、输出模块未恢复
4. ✅ **保持布局优化**：技术验证保持2列居中布局
5. ✅ **代码质量**：所有代码检查通过，无错误和警告
6. ✅ **功能完整**：所有功能正常工作

网站现在使用英文界面，内容简洁专业，信息层次清晰。

---

**更新状态**: ✅ 已完成  
**测试状态**: ✅ 已通过  
**部署状态**: 🚀 准备就绪  
**代码质量**: ✅ 优秀  
**语言**: 🇬🇧 English
