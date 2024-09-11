-- Adminer 4.8.1 PostgreSQL 16.4 (Debian 16.4-1.pgdg120+1) dump

INSERT INTO "has" ("id_user", "id_module", "nbrofpersonnalpoints") VALUES
(1,	1,	0);



INSERT INTO "t_class" ("id_class", "claname") VALUES
(1,	'MID3');

INSERT INTO "t_module" ("id_module", "modnumber", "modtype", "modteacher", "modyear", "modtrimester") VALUES
(1,	342,	'I',	'Carrel',	2024,	1);


INSERT INTO "t_user" ("id_user", "usename", "useemail", "usesurname", "id_class") VALUES
(1,	'pk88yte',	'thomas.nardou@eduvaud.ch',	'Thomas Louis Nardou',	1);

ALTER TABLE ONLY "public"."has" ADD CONSTRAINT "has_id_module_fkey" FOREIGN KEY (id_module) REFERENCES t_module(id_module) NOT DEFERRABLE;
ALTER TABLE ONLY "public"."has" ADD CONSTRAINT "has_id_user_fkey" FOREIGN KEY (id_user) REFERENCES t_user(id_user) NOT DEFERRABLE;

ALTER TABLE ONLY "public"."is_affiliated" ADD CONSTRAINT "is_affiliated_id_group_fkey" FOREIGN KEY (id_group) REFERENCES t_team(id_group) NOT DEFERRABLE;
ALTER TABLE ONLY "public"."is_affiliated" ADD CONSTRAINT "is_affiliated_id_user_fkey" FOREIGN KEY (id_user) REFERENCES t_user(id_user) NOT DEFERRABLE;

ALTER TABLE ONLY "public"."learns" ADD CONSTRAINT "learns_id_class_fkey" FOREIGN KEY (id_class) REFERENCES t_class(id_class) NOT DEFERRABLE;
ALTER TABLE ONLY "public"."learns" ADD CONSTRAINT "learns_id_module_fkey" FOREIGN KEY (id_module) REFERENCES t_module(id_module) NOT DEFERRABLE;

ALTER TABLE ONLY "public"."t_team" ADD CONSTRAINT "t_team_id_module_fkey" FOREIGN KEY (id_module) REFERENCES t_module(id_module) NOT DEFERRABLE;

ALTER TABLE ONLY "public"."t_user" ADD CONSTRAINT "t_user_id_class_fkey" FOREIGN KEY (id_class) REFERENCES t_class(id_class) NOT DEFERRABLE;

-- 2024-09-11 15:48:50.629012+00