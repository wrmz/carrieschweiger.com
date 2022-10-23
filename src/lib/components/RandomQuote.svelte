<script>
    const quotes = [{
        quote:'You can&rsquo;t use up creativity.<br/> The more you use, the more you have.',
        cite: 'M. Angelou'
    }, {
        quote: 'Good design is obvious.<br/> Great design is transparent.',
        cite: 'Joe Soparano'
    }, {
        quote: 'The challenge is about taking things that are infinitely complex and making them simpler and more understandable.',
        cite: 'Robert Greenberg'
    }, {
        quote: 'When people talk about innovation in this decade, they really mean design.',
        cite: 'Bruce Nussbaum'
    }, {
        quote: 'Look at usual things with unusual eyes.',
        cite: 'Vico Magistretti'
    }];

    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

</script>

<figure class="random-quote">
    <blockquote class="random-quote__content">{@html randomQuote.quote}</blockquote>
    <figcaption class="random-quote__cite">&ndash; {randomQuote.cite}</figcaption>
</figure>

<style>
    .random-quote {
        position: relative;
        margin: 0;
        font-size: 1.625rem;
        line-height: 2;
        text-align: center;
        color: var(--color-green);
        z-index: 1;
    }
    .random-quote__content {
        margin: 0;
    }
    .random-quote__content::before,
    .random-quote__content::after {
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='53' height='41' viewBox='0 0 106 82'%3E%3Cpath fill='%23d93269' fill-rule='evenodd' d='M61.35493 0 26.7895 82H.23433L39.4628 0h21.89212Zm44.5 0L71.2895 82H44.73433L83.9628 0h21.89212Z'/%3E%3C/svg%3E");
        position: absolute;
        z-index: -1;
    }
    .random-quote__content::before {
        top: 0;
        left: 0;
    }
    .random-quote__content::after {
        bottom: 0;
        right: 0;
    }
    .random-quote__cite {
        margin-top: 0.5em;
        font-size: 1rem;
    }
</style>
