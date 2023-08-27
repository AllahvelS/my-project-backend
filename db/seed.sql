\c notes_dev;

INSERT INTO notes (title, content, folder, date_created, last_edited, account_name, is_important)
VALUES
    ('Meeting Notes', 'Lorem ipsum...', 'Work', '2023-08-01', '2023-08-10', 'John Doe', true),
    ('Shopping List', 'Milk, eggs, bread...', 'Personal', '2023-08-05', '2023-08-05', 'Jane Smith', false),
    ('Project Ideas', 'Idea 1, Idea 2...', 'Creative', '2023-07-15', '2023-08-08', 'Alice Johnson', true);

INSERT INTO users (email, password) VALUES
    ('user1@example.com', 'password123'),
    ('user2@example.com', 'random123');
