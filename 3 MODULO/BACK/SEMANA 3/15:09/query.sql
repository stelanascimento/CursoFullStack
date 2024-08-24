
select * from movies;
select id, name from movies where name ilike 'star wars%';

--JOIN juntar com a informacao de outra tabela

select * from movies join movie_abstracts_en on movies.id = movie_abstracts_en.movie_id where name ilike 'star wars%';

select id, name, abstract from movies join movie_abstracts_en on movies.id = movie_abstracts_en.movie_id where name ilike 'star wars%';

select id, name, abstract from movies inner join movie_abstracts_en on movies.id = movie_abstracts_en.movie_id where name ilike 'star wars%';

--LEFT JOINS
select id, name, abstract from movies left join movie_abstracts_en on movies.id = movie_abstracts_en.movie_id where name ilike 'star wars%';

select id, name, abstract from movies left join movie_abstracts_en on movies.id = movie_abstracts_en.movie_id;

select 
* 
from movies 
left join movie_abstracts_en on movies.id = movie_abstracts_en.movie_id
left join movie_abstracts_es on movies.id = movie_abstracts_es.movie_id
;

select 
 id, name, movie_abstracts_en.abstract as abstract_en, movie_abstracts_es.abstract as abstract_es
from movies 
left join movie_abstracts_en on movies.id = movie_abstracts_en.movie_id
left join movie_abstracts_es on movies.id = movie_abstracts_es.movie_id
;

-- JOIN em uma relacao muitos para muitos
select * 
from movies 
left join movie_categories on movies.id = movie_categories.movie_id
where
    category_id = 13
;

select * 
from movies 
left join movie_categories on movies.id = movie_categories.movie_id
left join categories on movie_categories.category_id = categories.id
where
    category_id = 13
;

select 
 movie.id, name 
from movies 
left join movie_categories on movies.id = movie_categories.movie_id
left join categories on movie_categories.category_id = categories.id
where
    category_id = 13
;
select 
 movie.id, name 
from movies 
left join movie_categories on movies.id = movie_categories.movie_id
left join categories on movie_categories.category_id = categories.id
where
    categories.name  like 'A%'
;

--GROUP BY junto com JOIN
select 
 categories.name, count(*) 
from movies 
left join movie_categories on movies.id = movie_categories.movie_id
left join categories on movie_categories.category_id = categories.id
group by
    categories.name
order by count(*) desc
;

--SOLUCAO PARA AGRUPAR POR NUMERO DE MINUTOS
select 
 categories.name, SUM(runtime) 
from movies 
left join movie_categories on movies.id = movie_categories.movie_id
left join categories on movie_categories.category_id = categories.id
group by
    categories.name
order by SUM(runtime)  desc
;

--Desafio - Relacionando pessoas e filmes
-- 1-Quais sao os filmes que tiveram maior numero de pessoas envolvidas
-- 2- Quais sao as pessoas que tiveram envolvidas em mais filmes

select 
    movies.name,count(*)
from movies
join casts on movies.id = casts.movie_id
join people people.id = casts.person_id
where movies.kind = 'movie'
group by movies.name
order by count(*) desc
limit 100

--Criando tabelas com relacionamentos
create database rede_social;







