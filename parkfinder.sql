--
-- File generated with SQLiteStudio v3.3.3 on Tue Nov 30 14:07:15 2021
--
-- Text encoding used: UTF-8
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: Base
CREATE TABLE Base (id INTEGER PRIMARY KEY, name STRING);
INSERT INTO Base (id, name) VALUES (1, 'St Johns Park');
INSERT INTO Base (id, name) VALUES (2, 'Granville Park');

-- Table: BBQ
CREATE TABLE BBQ (id NUMERIC PRIMARY KEY, baseId STRING REFERENCES Base (id), location BLOB, powerpoints NUMERIC, tables NUMERIC, grills NUMERIC);
INSERT INTO BBQ (id, baseId, location, powerpoints, tables, grills) VALUES (1, 1, NULL, 3, 3, 4);
INSERT INTO BBQ (id, baseId, location, powerpoints, tables, grills) VALUES (2, 2, NULL, 2, 1, 1);
INSERT INTO BBQ (id, baseId, location, powerpoints, tables, grills) VALUES (3, 1, NULL, 1, 1, 2);

-- Table: Lakes
CREATE TABLE Lakes (id INTEGER PRIMARY KEY AUTOINCREMENT, baseId NUMERIC REFERENCES Base (id), swim BOOLEAN, name STRING, location BLOB);
INSERT INTO Lakes (id, baseId, swim, name, location) VALUES (1, 1, 'TRUE', 'Calvin', NULL);

-- Table: Parks
CREATE TABLE Parks (description STRING, bbq BOOLEAN, areasOfInterest BOOLEAN, Sports BOOLEAN, Trails BOOLEAN, Parking BOOLEAN, baseId NUMERIC REFERENCES Base (id), location BLOB, lakes BOOLEAN, animalFriendly BOOLEAN, type STRING);
INSERT INTO Parks (description, bbq, areasOfInterest, Sports, Trails, Parking, baseId, location, lakes, animalFriendly, type) VALUES ('Family friendly park in Western Sydney', 'TRUE', 'FALSE', 'FALSE', 'FALSE', 'FALSE', 1, NULL, 'TRUE', 'TRUE', 'Local');
INSERT INTO Parks (description, bbq, areasOfInterest, Sports, Trails, Parking, baseId, location, lakes, animalFriendly, type) VALUES ('Good park to play soccer', 'FALSE', 'FALSE', 'FALSE', 'FALSE', 'FALSE', 2, NULL, 'FALSE', 'FALSE', 'Local');

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
