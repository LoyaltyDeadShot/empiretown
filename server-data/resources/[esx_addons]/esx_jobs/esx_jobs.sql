

INSERT INTO `addon_account` (name, label, shared) VALUES
	('caution', 'Caution', 0)
;

INSERT INTO `jobs` (name, label) VALUES
	('slaughterer', 'Abatteur'),
	('fisherman', 'Pêcheur'),
	('lumberjack', 'Bûcheron'),
	('fueler', 'Raffineur'),
	('reporter', 'Journaliste')
;

INSERT INTO `job_grades` (job_name, grade, name, label, salary, skin_male, skin_female) VALUES
	('lumberjack', 0, 'employee', 'Employee', 0, '{}', '{}'),
	('fisherman', 0, 'employee', 'Employee', 0, '{}', '{}'),
	('fueler', 0, 'employee', 'Employee', 0, '{}', '{}'),
	('reporter', 0, 'employee', 'Employee', 0, '{}', '{}'),
	('slaughterer',0,'employee','Employee',0,'{\"age_1\":0,\"glasses_2\":0,\"beard_1\":5,\"decals_2\":0,\"beard_4\":0,\"shoes_2\":0,\"tshirt_2\":0,\"lipstick_2\":0,\"hair_2\":0,\"arms\":67,\"pants_1\":36,\"skin\":29,\"eyebrows_2\":0,\"shoes\":10,\"helmet_1\":-1,\"lipstick_1\":0,\"helmet_2\":0,\"hair_color_1\":0,\"glasses\":0,\"makeup_4\":0,\"makeup_1\":0,\"hair_1\":2,\"bproof_1\":0,\"bags_1\":0,\"mask_1\":0,\"lipstick_3\":0,\"chain_1\":0,\"eyebrows_4\":0,\"sex\":0,\"torso_1\":56,\"beard_2\":6,\"shoes_1\":12,\"decals_1\":0,\"face\":19,\"lipstick_4\":0,\"tshirt_1\":15,\"mask_2\":0,\"age_2\":0,\"eyebrows_3\":0,\"chain_2\":0,\"glasses_1\":0,\"ears_1\":-1,\"bags_2\":0,\"ears_2\":0,\"torso_2\":0,\"bproof_2\":0,\"makeup_2\":0,\"eyebrows_1\":0,\"makeup_3\":0,\"pants_2\":0,\"beard_3\":0,\"hair_color_2\":4}','{\"age_1\":0,\"glasses_2\":0,\"beard_1\":5,\"decals_2\":0,\"beard_4\":0,\"shoes_2\":0,\"tshirt_2\":0,\"lipstick_2\":0,\"hair_2\":0,\"arms\":72,\"pants_1\":45,\"skin\":29,\"eyebrows_2\":0,\"shoes\":10,\"helmet_1\":-1,\"lipstick_1\":0,\"helmet_2\":0,\"hair_color_1\":0,\"glasses\":0,\"makeup_4\":0,\"makeup_1\":0,\"hair_1\":2,\"bproof_1\":0,\"bags_1\":0,\"mask_1\":0,\"lipstick_3\":0,\"chain_1\":0,\"eyebrows_4\":0,\"sex\":1,\"torso_1\":49,\"beard_2\":6,\"shoes_1\":24,\"decals_1\":0,\"face\":19,\"lipstick_4\":0,\"tshirt_1\":9,\"mask_2\":0,\"age_2\":0,\"eyebrows_3\":0,\"chain_2\":0,\"glasses_1\":5,\"ears_1\":-1,\"bags_2\":0,\"ears_2\":0,\"torso_2\":0,\"bproof_2\":0,\"makeup_2\":0,\"eyebrows_1\":0,\"makeup_3\":0,\"pants_2\":0,\"beard_3\":0,\"hair_color_2\":4}')
;

INSERT INTO `items` (`name`, `label`, `weight`) VALUES
	('alive_chicken', 'Poulet vivant', 1),
	('slaughtered_chicken', 'Poulet abattu', 1),
	('packaged_chicken', 'Poulet en barquette', 1),
	('fish', 'Poisson', 1),
	('stone', 'Pierre', 1),
	('washed_stone', 'Pierre Lavée', 1),
	('copper', 'Cuivre', 1),
	('iron', 'Fer', 1),
	('gold', 'Or', 1),
	('diamond', 'Diamant', 1),
	('wood', 'Bois', 1),
	('cutted_wood', 'Bois coupé', 1),
	('packaged_plank', 'Paquet de planches', 1),
	('petrol', 'Pétrole', 1),
	('petrol_raffin', 'Pétrole Raffiné', 1),
	('essence', 'Essence', 1),
	('wool', 'Laine', 1),
	('fabric', 'Tissu', 1),
	('clothe', 'Vêtement', 1)
;
