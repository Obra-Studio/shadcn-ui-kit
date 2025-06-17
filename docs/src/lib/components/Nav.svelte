<script>
    import { page } from '$app/stores';
</script>

<div class="nav-container">
    <nav>
        <a href="/" class:selected={$page.url.pathname === '/'}>Intro</a>
        <a href="/changelog" class:selected={$page.url.pathname === '/changelog'}>Changelog</a>
        <a href="/components" class:selected={$page.url.pathname === '/components'}>Components</a>

        <a href="/colors" class:selected={$page.url.pathname === '/colors'}>Colors</a>
        <a href="/typography" class:selected={$page.url.pathname === '/typography'}>Typography</a>
        <a href="/icons" class:selected={$page.url.pathname === '/icons'}>Icons</a>
        <a href="/technical-comments" class:selected={$page.url.pathname === '/technical-comments'}>Technical comments</a>
        <a href="/license" class:selected={$page.url.pathname === '/license'}>License</a>
    </nav>
</div>

<style>

    .nav-container {
        padding: 1.5rem;
        border-right: 1px solid #CCC;
        background: #FFF;
    }

    @media (min-width: 960px) {
        .nav-container nav {
            position: sticky;
            top: 1rem;
        }

        .nav-container {
            width: auto;
            flex-shrink: 0;
            flex-basis: 16rem;
            border-width: 0 1px 0 0;
        }
    }

    nav a {
        text-decoration: none;
    }

    nav a {
        display: block;
        padding: 10px;
        color: #333;
        border-radius: 4px;
    }

    nav a.selected {
        background-color: #eee;
        color: #000;
    }
</style>