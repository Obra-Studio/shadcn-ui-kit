<script>
	import { onMount } from 'svelte';

	let { testimonials = [] } = $props();

	let slider;
	let slides;
	let startX = 0;
	let currentSlide = $state(0);

	function goToSlide(index) {
		const radio = document.getElementById(`testimonial-${index + 1}`);
		if (radio) {
			radio.checked = true;
			currentSlide = index;
		}
	}

	onMount(() => {
		if (slides) {
			slides.addEventListener('touchstart', (e) => {
				startX = e.touches[0].clientX;
			}, { passive: true });

			slides.addEventListener('touchend', (e) => {
				const endX = e.changedTouches[0].clientX;
				const diff = startX - endX;
				const threshold = 50;

				if (Math.abs(diff) > threshold) {
					if (diff > 0 && currentSlide < testimonials.length - 1) {
						// Swipe left - next slide
						goToSlide(currentSlide + 1);
					} else if (diff < 0 && currentSlide > 0) {
						// Swipe right - previous slide
						goToSlide(currentSlide - 1);
					}
				}
			}, { passive: true });
		}
	});
</script>

<div class="testimonial-slider" bind:this={slider}>
	<div class="testimonial-track">
		{#each testimonials as _, i}
			<input type="radio" name="testimonial" id="testimonial-{i + 1}" checked={i === 0} />
		{/each}

		<div class="testimonial-slides" bind:this={slides}>
			{#each testimonials as testimonial}
				<div class="testimonial-slide prose">
					<blockquote>
						<p>{testimonial.quote}</p>
						<p>— {testimonial.author}</p>
					</blockquote>
				</div>
			{/each}
		</div>

		<div class="testimonial-dots">
			{#each testimonials as _, i}
				<label for="testimonial-{i + 1}"></label>
			{/each}
		</div>
	</div>
</div>
