-- Drop existing tables in correct dependency order
DROP TABLE IF EXISTS Projects;
DROP TABLE IF EXISTS Users;

-- Create Users table
CREATE TABLE Users (
  UserID INT PRIMARY KEY AUTO_INCREMENT,
  UserName VARCHAR(255) NOT NULL UNIQUE,
  UserDepartment VARCHAR(255) NOT NULL,
  UserRole VARCHAR(255) NOT NULL,
  UserActive BOOLEAN NOT NULL,
  UNIQUE (UserID),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create Projects table with UserName references
CREATE TABLE Projects (
  ProjectID INT PRIMARY KEY AUTO_INCREMENT,
  ProjectName VARCHAR(255) NOT NULL UNIQUE,
  ProjectOwner VARCHAR(255) NOT NULL,
  ProjectPriority VARCHAR(255) NOT NULL,
  ProjectStatus VARCHAR(255) NOT NULL,
  ProjectColor VARCHAR(255) NOT NULL,
  StartDate DATETIME,
  DueDate DATETIME,
  Am VARCHAR(255) NOT NULL,
  AmDays INT NOT NULL,
  Seo VARCHAR(255) NOT NULL,
  SeoDays INT NOT NULL,
  CopyName VARCHAR(255) NOT NULL,
  CopyDays INT NOT NULL,
  Design VARCHAR(255) NOT NULL,
  DesignDays INT NOT NULL,
  Social VARCHAR(255) NOT NULL,
  SocialDays INT NOT NULL,
  Dev VARCHAR(255) NOT NULL,
  DevDays INT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (ProjectOwner) REFERENCES Users(UserName),
  FOREIGN KEY (Am) REFERENCES Users(UserName),
  FOREIGN KEY (Seo) REFERENCES Users(UserName),
  FOREIGN KEY (CopyName) REFERENCES Users(UserName),
  FOREIGN KEY (Design) REFERENCES Users(UserName),
  FOREIGN KEY (Social) REFERENCES Users(UserName),
  FOREIGN KEY (Dev) REFERENCES Users(UserName)
);

-- Trigger to auto-set ProjectOwner to AmID on insert
DELIMITER //
CREATE TRIGGER set_project_owner
BEFORE INSERT ON Projects
FOR EACH ROW
BEGIN
  SET NEW.ProjectOwner = NEW.Am;
END;
//
DELIMITER ;