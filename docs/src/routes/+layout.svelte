<script>
	import { page } from '$app/stores';
	import '$lib/screen.css'
</script>

<div class="main-flex-container">
	<header>
		<h1><a href="/">Obra shadcn/ui docs</a></h1>
	</header>

	<div class="container">

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

		<main>
			<slot />
		</main>
	</div>

	<footer>
		<p>Obra shadcn/ui is a UI kit for Figma that tracks shadcn/ui v4. See <a href="https://figma.com/@obra-studio">our Figma community profile</a> to download.</p>
	</footer>
</div>

<style>

		footer {
				padding: 1rem;

		}

		footer a {
				color: #777;
		}

		header {
				margin: 0 auto;
				padding: 1rem 2rem;
				width: 100%;
        background: #FFF;
        border: 0;
        border-bottom: 1px solid #CCC;
    }

		@media (min-width: 960px) {
				header {
						padding: .5rem 2rem;
				}
		}

		header h1 {
				font-size: 1.5rem;
		}

    header h1 a {
        text-decoration: none;
        color: #000;
    }

		.container {
        max-width: 1280px;
				margin: 0 auto;
        width: 100%;
				flex-grow: 1;
		}


    @media (min-width: 960px) {

        .container {
            display: flex;
        }
    }

    main {
				padding: 1.5rem;
        background: #FFF;
		}

    @media (min-width: 960px) {

        main {
            flex-grow: 1;
            padding: 1.5rem 4rem 4rem;
        }
    }

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