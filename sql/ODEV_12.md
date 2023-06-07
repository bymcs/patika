Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

1. film tablosunda film uzunluğu length sütununda gösterilmektedir. Uzunluğu ortalama film uzunluğundan fazla kaç tane film vardır?
2. film tablosunda en yüksek rental_rate değerine sahip kaç tane film vardır?
3. film tablosunda en düşük rental_rate ve en düşün replacement_cost değerlerine sahip filmleri sıralayınız.
4. payment tablosunda en fazla sayıda alışveriş yapan müşterileri(customer) sıralayınız.


```sql
SELECT COUNT(film_id) FROM film WHERE length > (SELECT AVG(length) FROM film)
```

```sql
SELECT COUNT(*) FROM  film WHERE rental_rate = ALL (SELECT MAX(rental_rate) FROM film)
```

```sql
SELECT * FROM film
WHERE rental_rate = ANY
(
	SELECT MIN(rental_rate) FROM film
) AND
replacement_cost = ANY
(
	SELECT MIN(replacement_cost) FROM film
);
```

```sql
SELECT customer_id, COUNT(*) AS most_payments FROM payment
GROUP BY customer_id
ORDER BY most_payments DESC
```