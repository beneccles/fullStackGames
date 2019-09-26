INSERT INTO users (name, email, is_admin)
VALUES (${1}, ${2}, false)
RETURNING user_id;

