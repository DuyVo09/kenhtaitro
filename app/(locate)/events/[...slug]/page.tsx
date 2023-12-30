import { DetailSection, OverviewSection, RelatedSection } from "./_sections";
import { Box } from "@mui/material";

async function fetchSlugsFromIYourAPI() {
  // Replace this with your own logic to fetch the slugs from your API
  const slugs = await fetch('/api/slugs')
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error fetching slugs:', error);
      return ["mock-slug-1", "mock-slug-2"];
    });

  return slugs;
}

export async function getStaticPaths() {
  // Replace this with your own logic to fetch the possible values for [...slug]
  const slugs = await fetchSlugsFromIYourAPI();

  const paths = slugs.map((slug: string) => ({
    params: { slug: slug.split('/') }, // Split the slug into its parts
  }));

  return { paths, fallback: false };
} 

function EventDetailPage() {
  return (
    <Box className="flex-col flex w-full">
      <OverviewSection />
      <DetailSection />
      <RelatedSection />
    </Box>
  );
}

export default EventDetailPage;
