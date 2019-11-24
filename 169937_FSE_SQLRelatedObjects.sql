
CREATE TABLE Parent_Task(
	[Parent_ID] [int] NOT NULL IDENTITY,
	[Parent_Task] [nvarchar](50) NULL)
ALTER TABLE Parent_Task ADD PRIMARY KEY (Parent_ID)


--------------------------------------
CREATE TABLE [dbo].[Project](
	[Project_ID] [int] NOT NULL IDENTITY,
	[Project] [nvarchar](50) NULL,
	[Start_Date] [datetime] NULL,
	[End_Date] [datetime] NULL,
	[Priorty] [float] NULL
	) ON [PRIMARY]

ALTER TABLE Project ADD PRIMARY KEY (Project_ID)

----------------------------------------------

CREATE TABLE [dbo].[Task_Detail](
	[Task_ID] [int] NOT NULL IDENTITY,
	[Parent_ID] [int] NULL,
       [Project_ID] [int] NULL,
	[Task] [nvarchar](50) NULL,
	[Start_Date] [datetime] NULL,
	[End_Date] [datetime] NULL,
	[Priorty] [float] NULL,
	[status] [nvarchar](50) NULL
) ON [PRIMARY]

ALTER TABLE Task_Detail ADD PRIMARY KEY (Task_ID)

ALTER TABLE Task_Detail ADD CONSTRAINT FKParent_task_id FOREIGN KEY (Parent_ID)
    REFERENCES  Parent_Task([Parent_ID]);

ALTER TABLE Task_Detail ADD CONSTRAINT FKProject_id FOREIGN KEY (Project_ID)
    REFERENCES  Project([Project_ID]);
-----------------------------------------------------
CREATE TABLE [dbo].[Users](
	[User_ID] [int] NOT NULL IDENTITY,
	[Task_ID] [int] NULL,
    [Project_ID] [int] NULL,
	[First_Name] [nvarchar](50) NULL,
	[Last_Name] [nvarchar](50) NULL,
	[Employee_ID] [int] NULL
) ON [PRIMARY]

ALTER TABLE [Users] ADD PRIMARY KEY ([User_ID])

ALTER TABLE [Users] ADD CONSTRAINT FK_task_id FOREIGN KEY(Task_ID)
    REFERENCES  Task_Detail([Task_ID]);

ALTER TABLE [Users] ADD CONSTRAINT FKProject_user_id FOREIGN KEY (Project_ID)
    REFERENCES  Project([Project_ID]);
	-------