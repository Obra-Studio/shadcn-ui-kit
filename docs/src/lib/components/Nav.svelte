<script>
    import { page } from '$app/stores';
</script>

<nav class="nav-container">
    <h2>Basics</h2>
    <ul>
        <li>
            <a href="/" class:selected={$page.url.pathname === '/'}>Intro</a>
        </li>
        <li>
            <a href="/changelog" class:selected={$page.url.pathname === '/changelog'}>Changelog</a>
        </li>
        <li>
            <a href="/videos" class:selected={$page.url.pathname === '/videos'}>Videos</a>
        </li>
        <li>
            <a href="/components" class:selected={$page.url.pathname === '/components'}>Components</a>
        </li>
    </ul>

    <h2>Getting started</h2>
    <ul>
        <li>
            <a href="/colors" class:selected={$page.url.pathname === '/colors'}>Colors</a>
        </li>
        <li>
            <a href="/typography" class:selected={$page.url.pathname === '/typography'}>Typography</a>
        </li>
        <li>
            <a href="/icons" class:selected={$page.url.pathname === '/icons'}>Icons</a>
        </li>
    </ul>

    <h2>Other</h2>
    <ul>
        <li>
            <a href="/technical-comments" class:selected={$page.url.pathname === '/technical-comments'}>Technical comments</a>
        </li>
        <li>
            <a href="/license" class:selected={$page.url.pathname === '/license'}>License</a>
        </li>
    </ul>

</nav>

<style>

    .nav-container {
        padding: 1.5rem;
        border-left: 1px solid #CCC;
        background: #FFF;
    }

    @media (min-width: 960px) {
        .nav-container {
            position: sticky;
            top: 1rem;
            width: auto;
            flex-shrink: 0;
            flex-basis: 16rem;
            border-width: 0 0 0 1px;
        }
    }

    nav a {
        text-decoration: none;
    }

    ul {
        padding: 0;
        margin: 0;
    }

    h2 {
        font-size: 1rem;
    }

    li {
        list-style: none;
    }

    nav a {
        display: block;
        padding: 10px;
        color: #333;
        border-radius: 4px;
    }

    nav a:focus {
        background-color: #f5f5f5;
    }

    nav a.selected {
        background-color: #eee;
        color: #000;
    }
</style>