<header class="hero">
    <figure class="hero__figure">
        <picture class="hero__picture">
            <img alt="" src="https://picsum.photos/2048/1024" class="hero__img" width="2048" height="1024" />
        </picture>
        <figcaption class="hero__figcaption">
            <div class="hero__figcaption-content">
                <slot />
            </div>
        </figcaption>
    </figure>
</header>

<style>
    .hero {
        position: relative;
    }
    .hero__figure {
        margin: 0;
    }
    .hero__img {
        display: block;
        width: 100%;
        height: auto;
    }
    .hero__figcaption {
        position: absolute;
        display: flex;
        align-items: center;
        top: 50%;
        left: 50px;
        padding: 15px 30px;
        transform: translateY(-50%);
        /* background: var(--color-green); */
        /* z-index: 1; */
    }
    .hero__figcaption::before,
    .hero__figcaption::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;

        height: 100%;
    }
    .hero__figcaption::before {
        width: calc(100% + 20px);
        background: var(--color-pink);
        transform: translateX(-10px) rotate(1.5deg);
    }
    .hero__figcaption::after {
        width: 100%;
        background: var(--color-green);
        transform: rotate(-1.5deg);
    }
    .hero__figcaption-content {
        position: relative;
        z-index: 1;
    }
</style>
