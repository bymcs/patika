Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

1. city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz LEFT JOIN sorgusunu yazınız.
2. customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz RIGHT JOIN sorgusunu yazınız.
3. customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz FULL JOIN sorgusunu yazınız.


```sql
SELECT c.city,c2.country FROM city c
LEFT JOIN country c2 on c2.country_id = c.country_id;
```

```sql
SELECT p.payment_id,c.first_name,c.last_name FROM payment p
RIGHT JOIN customer c on c.customer_id = p.customer_id;
```

```sql
SELECT r.rental_id,c.first_name,c.last_name FROM rental r
FULL JOIN customer c on c.customer_id = r.customer_id;
```






