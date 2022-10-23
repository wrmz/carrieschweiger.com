<article class="card">
    <div class="card__content">
        <h2 class="card__title"><slot name="title"></slot></h2>
        <div class="card__copy">
            <slot name="copy"></slot>
        </div>
    </div>
</article>

<style>
    .card {
        position: relative;
        color: var(--color-gray);
        z-index: 1;
    }
    .card__content {
        position: relative;
        padding: 20px 30px;
        background: var(--color-green);
        border: 1px solid var(--color-gray);
        box-shadow: 0 0 0 8px var(--color-green);
        z-index: 1;
    }
    .card::before {
        content: '';
        position: absolute;
        top: -9px;
        left: -9px;
        width: calc(100% + 18px);
        height: calc(100% + 18px);
        background: var(--color-pink);
        z-index: -1;
        transform: rotate(-1.5deg);
    }
    .card__title {
        margin: 0;
        font-weight: normal;
    }
    .card__copy {
        font-size: 1rem;
        list-style: 1.6667;
    }
</style>
