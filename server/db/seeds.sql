-- Insert sample Users
INSERT INTO Users (UserName, UserDepartment, UserRole, UserActive) VALUES
('Kayla', 'Account Management', 'Senior Manager', TRUE),
('Liam', 'SEO', 'Specialist', TRUE),
('Lauren', 'Copywriting', 'Senior Writer', TRUE),
('Esther', 'Copywriting', 'Writer', TRUE),
('Jessica', 'Design', 'Senior Designer', TRUE),
('Emma', 'Design', 'Designer', TRUE),
('Chelsea', 'Social Media', 'Coordinator', TRUE),
('Paul', 'Development', 'Senior Developer', TRUE),
('Mike', 'Development', 'Developer', TRUE),
('Brianna', 'Account Management', 'Associate', TRUE);

-- Insert sample Projects (ProjectOwner will be auto-filled via trigger)
INSERT INTO Projects (
  ProjectName, ProjectPriority, ProjectStatus, ProjectColor,
  StartDate, DueDate,
  Am, AmDays,
  Seo, SeoDays,
  CopyName, CopyDays,
  Design, DesignDays,
  Social, SocialDays,
  Dev, DevDays, Notes
) VALUES
(
  'Website Redesign', 'Priority', 'Pending', '#FF5733',
  '2025-08-01 09:00:00', '2025-09-15 17:00:00',
  'Kayla', 5,
  'Liam', 7,
  'Lauren', 4,
  'Jessica', 10,
  'Chelsea', 3,
  'Paul', 12,
  null
),
(
  'SEO Optimization Q3', 'Normal', 'Completed', '#33C1FF',
  '2025-09-01 09:00:00', '2025-09-30 17:00:00',
  'Kayla', 2,
  'Liam', 10,
  'Esther', 3,
  'Jessica', 2,
  'Chelsea', 5,
  'Paul', 4,
  'This is an Seo thing example.'
),
(
  'Product Launch Campaign', 'Priority', 'Active', '#8E44AD',
  '2025-08-15 09:00:00', '2025-10-01 17:00:00',
  'Kayla', 4,
  'Liam', 8,
  'Lauren', 6,
  'Jessica', 12,
  'Chelsea', 8,
  'Mike', 10,
  'This is a note example as well.'
);