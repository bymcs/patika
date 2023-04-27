<p class="has-line-data" data-line-start="0" data-line-end="2">[16,21,11,8,12,22] -&gt; Merge Sort<br>
1- Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.</p>
<pre><code>              [16,21,11,8,12,22]

            [16,21,11] - [8,12,22]

          [16] [21,11] - [8] [12,22]

        [16] [21] [11] - [8] [12] [22]

          [16] [11,21] - [8] [12,22]

            [11,16,21] - [8,12,22]

               [8,11,12,16,21,22]
</code></pre>
<p class="has-line-data" data-line-start="17" data-line-end="18">2- Big-O gösterimini yazınız.</p>
<p class="has-line-data" data-line-start="19" data-line-end="20">O(nlogn)</p>
