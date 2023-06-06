Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

1. city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
2. customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
3. customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.

```sql
SELECT C.city,CO.country FROM city C
INNER JOIN country CO ON CO.country_id = C.country_id
```

```sql
SELECT P.payment_id,C.first_name,P.amount,P.payment_date FROM public.payment P
INNER JOIN customer C ON C.customer_id = P.customer_id
```

```sql
SELECT R.rental_id,R.return_date,C.first_name,C.email FROM rental R
INNER JOIN customer C ON C.customer_id = R.customer_id
```