

INSERT INTO `addon_account` (name, label, shared) VALUES
	('caution', 'Caution', 0)
;

INSERT INTO `jobs` (name, label) VALUES
	('slaughterer', 'Schlachterei'),
	('fisherman', 'Fischerei'),
	('miner', 'Bergbau'),
	('lumberjack', 'Holzbetrieb'),
	('fueler', 'Raffinerie'),
	('reporter', 'Kanal 7')
;

INSERT INTO `job_grades` (job_name, grade, name, label, salary, skin_male, skin_female) VALUES
	('lumberjack', 0, 'employee', 'Mitarbeiter', 0, '{}', '{}'),
	('fisherman', 0, 'employee', 'Mitarbeiter', 0, '{}', '{}'),
	('fueler', 0, 'employee', 'Mitarbeiter', 0, '{}', '{}'),
	('reporter', 0, 'employee', 'Mitarbeiter', 0, '{}', '{}'),
	('miner', 0, 'employee', 'Mitarbeiter', 0, '{"tshirt_2":1,"ears_1":8,"glasses_1":15,"torso_2":0,"ears_2":2,"glasses_2":3,"shoes_2":1,"pants_1":75,"shoes_1":51,"bags_1":0,"helmet_2":0,"pants_2":7,"torso_1":71,"tshirt_1":59,"arms":2,"bags_2":0,"helmet_1":0}', '{}'),
	('slaughterer',0,'employee','Mitarbeiter', 0,'{\"age_1\":0,\"glasses_2\":0,\"beard_1\":5,\"decals_2\":0,\"beard_4\":0,\"shoes_2\":0,\"tshirt_2\":0,\"lipstick_2\":0,\"hair_2\":0,\"arms\":67,\"pants_1\":36,\"skin\":29,\"eyebrows_2\":0,\"shoes\":10,\"helmet_1\":-1,\"lipstick_1\":0,\"helmet_2\":0,\"hair_color_1\":0,\"glasses\":0,\"makeup_4\":0,\"makeup_1\":0,\"hair_1\":2,\"bproof_1\":0,\"bags_1\":0,\"mask_1\":0,\"lipstick_3\":0,\"chain_1\":0,\"eyebrows_4\":0,\"sex\":0,\"torso_1\":56,\"beard_2\":6,\"shoes_1\":12,\"decals_1\":0,\"face\":19,\"lipstick_4\":0,\"tshirt_1\":15,\"mask_2\":0,\"age_2\":0,\"eyebrows_3\":0,\"chain_2\":0,\"glasses_1\":0,\"ears_1\":-1,\"bags_2\":0,\"ears_2\":0,\"torso_2\":0,\"bproof_2\":0,\"makeup_2\":0,\"eyebrows_1\":0,\"makeup_3\":0,\"pants_2\":0,\"beard_3\":0,\"hair_color_2\":4}','{\"age_1\":0,\"glasses_2\":0,\"beard_1\":5,\"decals_2\":0,\"beard_4\":0,\"shoes_2\":0,\"tshirt_2\":0,\"lipstick_2\":0,\"hair_2\":0,\"arms\":72,\"pants_1\":45,\"skin\":29,\"eyebrows_2\":0,\"shoes\":10,\"helmet_1\":-1,\"lipstick_1\":0,\"helmet_2\":0,\"hair_color_1\":0,\"glasses\":0,\"makeup_4\":0,\"makeup_1\":0,\"hair_1\":2,\"bproof_1\":0,\"bags_1\":0,\"mask_1\":0,\"lipstick_3\":0,\"chain_1\":0,\"eyebrows_4\":0,\"sex\":1,\"torso_1\":49,\"beard_2\":6,\"shoes_1\":24,\"decals_1\":0,\"face\":19,\"lipstick_4\":0,\"tshirt_1\":9,\"mask_2\":0,\"age_2\":0,\"eyebrows_3\":0,\"chain_2\":0,\"glasses_1\":5,\"ears_1\":-1,\"bags_2\":0,\"ears_2\":0,\"torso_2\":0,\"bproof_2\":0,\"makeup_2\":0,\"eyebrows_1\":0,\"makeup_3\":0,\"pants_2\":0,\"beard_3\":0,\"hair_color_2\":4}')
;

INSERT INTO `items` (`name`, `label`, `weight`) VALUES
	('alive_chicken', 'lebendes Huhn', 1),
	('slaughtered_chicken', 'geschlachtetes Huhn', 1),
	('packaged_chicken', 'Hähnchenfilet', 1),
	('fish', 'Fisch', 1),
	('stone', 'Felsbrocken', 1),
	('washed_stone', 'gewaschener Felsbrocken', 1),
	('copper', 'Kupfer', 1),
	('iron', 'Eisen', 1),
	('gold', 'Gold', 1),
	('diamond', 'Diamant', 1),
	('wood', 'Holz', 1),
	('cutted_wood', 'Holzstämme', 1),
	('packaged_plank', 'Bretterpaket', 1),
	('petrol', 'Öl', 1),
	('petrol_raffin', 'bearbeitetes Öl', 1),
	('essence', 'Benzin', 1),
	('wool', 'Wolle', 1),
	('fabric', 'Tuch', 1),
	('clothe', 'Kleidung', 1)
;
