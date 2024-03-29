export async function GET() {
	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
			<url>
                <loc>https://sudsandhosespressurewashing.com</loc>
            </url>
            <url>
                <loc>https://sudsandhosespressurewashing.com/getaquote</loc>
            </url>
            <url>
                <loc>https://sudsandhosespressurewashing.com/services</loc>
            </url>
            <url>
                <loc>https://sudsandhosespressurewashing.com/services/decks-and-porches</loc>
            </url>
            <url>
                <loc>https://sudsandhosespressurewashing.com/services/driveways</loc>
            </url>
            <url>
                <loc>https://sudsandhosespressurewashing.com/services/House-Washing-</loc>
            </url>
            <url>
                <loc>https://sudsandhosespressurewashing.com/services/sidewalks</loc>
            </url>
            <url>
                <loc>https://sudsandhosespressurewashing.com/services/roofs</loc>
            </url>
            <url>
                <loc>https://sudsandhosespressurewashing.com/services/gutters</loc>
            </url>
            <url>
                <loc>https://sudsandhosespressurewashing.com/services/projects</loc>
            </url>
            <url>
                <loc>https://sudsandhosespressurewashing.com/services/aboutus</loc>
            </url>
            <url>
                <loc>https://sudsandhosespressurewashing.com/services/faq</loc>
            </url>
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}