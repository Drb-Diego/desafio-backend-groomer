export default `
  CREATE TABLE IF NOT EXISTS Restaurant(
    id INT PRIMARY KEY AUTO_INCREMENT,
    logo LONGBLOB NOT NULL,
    name VARCHAR(255) NOT NULL,
    opening_hours VARCHAR(255) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS Category(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS Product(
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_image LONGBLOB NOT NULL,
    name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    restaurantId INT,
    categoryId INT,
    FOREIGN KEY (restaurantId) REFERENCES Restaurant(id),
    FOREIGN KEY (categoryId) REFERENCES Category(id)
  );

`;
