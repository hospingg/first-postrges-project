

CREATE TABLE authors(
    id serial PRIMARY KEY,
    first_name varchar(300) NOT NULL CHECK(first_name != ''),
    last_name varchar(300),
    birthdate date,
    email varchar(300) UNIQUE,
    phone_number varchar(36) UNIQUE
);

CREATE TABLE book(
    id serial PRIMARY KEY,
    author_id int REFERENCES authors(id),
    name varchar(300) NOT NULL CHECK(name != ''),
    public_date date,
    pages int CHECK(pages > 0),
    user_id int REFERENCES users(id)
);

CREATE TABLE users(
    id serial PRIMARY KEY,
    first_name varchar(300) NOT NULL CHECK(first_name != ''),
    last_name varchar(300),
    email varchar(300) UNIQUE,
    phone_number varchar(14) UNIQUE,
    adress varchar(400)
)

DROP TABLE authors


-- Функціяя та тригер, що перевіряє чи є зараз книга у користувача
CREATE FUNCTION check_book_availability()
RETURNS TRIGGER AS $$
BEGIN
    
    IF NEW.user_id IS NOT NULL AND EXISTS (SELECT 1 FROM book WHERE id = NEW.id AND user_id IS NOT NULL) THEN
        RAISE EXCEPTION 'Книжка вже зайнята';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER trigger_check_book_availability
BEFORE INSERT OR UPDATE ON book
FOR EACH ROW
EXECUTE FUNCTION check_book_availability();



INSERT INTO book (user_id, name, pages, author_id)
VALUES ( 31, 'Kobsar', 150, 12);



-- Перевірка роботи триггера
UPDATE book
SET user_id = 15
WHERE id = 91;