-- ========================================
-- CODESQUAD WEBSITE - MySQL Database Schema
-- ========================================
-- Run this in GoDaddy cPanel > phpMyAdmin
-- ========================================

-- Create articles table
CREATE TABLE IF NOT EXISTS `articles` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  `author` VARCHAR(255) NOT NULL,
  `readTime` VARCHAR(50) DEFAULT NULL,
  `date` VARCHAR(50) NOT NULL,
  `tag` VARCHAR(100) DEFAULT NULL,
  `type` VARCHAR(50) NOT NULL DEFAULT 'article',
  `youtubeId` VARCHAR(255) DEFAULT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_type` (`type`),
  INDEX `idx_date` (`date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ========================================
-- Insert Sample Data (Optional)
-- ========================================

-- Sample Articles
INSERT INTO `articles` (`title`, `description`, `author`, `readTime`, `date`, `tag`, `type`) VALUES
('The Future of AI in Software Development', 'Exploring how artificial intelligence is revolutionizing the way we write and maintain code, from automated testing to intelligent code completion.', 'Shahzaib Hamid', '8 min read', 'Mar 15, 2024', 'AI', 'article'),
('Cloud Migration Best Practices', 'A comprehensive guide to successfully migrating your infrastructure to the cloud, covering planning, execution, and optimization strategies.', 'Shahzaib Hamid', '12 min read', 'Mar 10, 2024', 'Cloud', 'article'),
('Agile Transformation Success Stories', 'Real-world examples of companies that successfully adopted Agile methodologies and the lessons learned from their transformation journey.', 'Shahzaib Hamid', '10 min read', 'Mar 5, 2024', 'Agile', 'article');

-- Sample White Papers
INSERT INTO `articles` (`title`, `description`, `author`, `readTime`, `date`, `tag`, `type`) VALUES
('Enterprise Digital Transformation Framework', 'A comprehensive framework for organizations embarking on digital transformation initiatives, covering strategy, implementation, and measurement.', 'Shahzaib Hamid', '25 min read', 'Feb 28, 2024', 'Strategy', 'white-paper'),
('Microservices Architecture Guide', 'An in-depth technical guide to designing, implementing, and managing microservices-based applications at scale.', 'Shahzaib Hamid', '30 min read', 'Feb 20, 2024', 'Architecture', 'white-paper'),
('DevOps Implementation Roadmap', 'A step-by-step roadmap for implementing DevOps practices in your organization, from cultural change to tool selection.', 'Shahzaib Hamid', '20 min read', 'Feb 15, 2024', 'DevOps', 'white-paper');

-- Sample Podcasts
INSERT INTO `articles` (`title`, `description`, `author`, `readTime`, `date`, `tag`, `type`, `youtubeId`) VALUES
('Building Scalable Systems', 'Discussion on architectural patterns and best practices for building systems that scale from startup to enterprise.', 'Shahzaib Hamid', '45 min', 'Mar 1, 2024', 'Architecture', 'podcast', 'dQw4w9WgXcQ'),
('AI and Machine Learning in Production', 'Exploring the challenges and solutions for deploying ML models in production environments.', 'Shahzaib Hamid', '50 min', 'Feb 25, 2024', 'AI', 'podcast', 'dQw4w9WgXcQ'),
('The Future of Software Engineering', 'A conversation about emerging trends, technologies, and methodologies shaping the future of software development.', 'Shahzaib Hamid', '40 min', 'Feb 18, 2024', 'Technology', 'podcast', 'dQw4w9WgXcQ');

-- ========================================
-- Verify Installation
-- ========================================

-- Check if table was created
SELECT 'Table created successfully!' AS status;

-- Count records
SELECT 
  COUNT(*) AS total_records,
  SUM(CASE WHEN type = 'article' THEN 1 ELSE 0 END) AS articles,
  SUM(CASE WHEN type = 'white-paper' THEN 1 ELSE 0 END) AS white_papers,
  SUM(CASE WHEN type = 'podcast' THEN 1 ELSE 0 END) AS podcasts
FROM `articles`;

-- ========================================
-- Schema Complete!
-- ========================================
