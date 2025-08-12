-- Insert sample Users
INSERT INTO Users (UserName, UserDepartment, UserRole, UserActive) VALUES
('Alice Johnson', 'Account Management', 'Manager', TRUE),
('Bob Smith', 'SEO', 'Specialist', TRUE),
('Clara Davis', 'Copywriting', 'Writer', TRUE),
('Daniel Lee', 'Design', 'Designer', TRUE),
('Eva Miller', 'Social Media', 'Coordinator', TRUE),
('Frank Harris', 'Development', 'Developer', TRUE),
('Grace Wilson', 'Account Management', 'Associate', FALSE);

-- Insert sample Projects (ProjectOwner will be auto-filled via trigger)
INSERT INTO Projects (
  ProjectName, ProjectPriority, ProjectStatus, ProjectColor,
  StartDate, DueDate,
  Am, AmDays,
  Seo, SeoDays,
  CopyName, CopyDays,
  Design, DesignDays,
  Social, SocialDays,
  Dev, DevDays
) VALUES
(
  'Website Redesign', 'High', 'In Progress', '#FF5733',
  '2025-08-01 09:00:00', '2025-09-15 17:00:00',
  'Alice Johnson', 5,
  'Bob Smith', 7,
  'Clara Davis', 4,
  'Daniel Lee', 10,
  'Eva Miller', 3,
  'Frank Harris', 12
),
(
  'SEO Optimization Q3', 'Medium', 'Planned', '#33C1FF',
  '2025-09-01 09:00:00', '2025-09-30 17:00:00',
  'Alice Johnson', 2,
  'Bob Smith', 10,
  'Clara Davis', 3,
  'Daniel Lee', 2,
  'Eva Miller', 5,
  'Frank Harris', 4
),
(
  'Product Launch Campaign', 'High', 'Not Started', '#8E44AD',
  '2025-08-15 09:00:00', '2025-10-01 17:00:00',
  'Alice Johnson', 4,
  'Bob Smith', 8,
  'Clara Davis', 6,
  'Daniel Lee', 12,
  'Eva Miller', 8,
  'Frank Harris', 10
);