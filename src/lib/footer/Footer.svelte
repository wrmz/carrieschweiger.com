<script>
    export const year = (new Date()).getFullYear();
</script>

<footer class="global-footer">
    <small>&copy; {year} | Carrie Schweiger</small>
</footer>

<style lang="scss">
    @import '../../styles/utils';
    .global-footer {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
        padding: 20px;
        background: color(gray);
    }
</style>
