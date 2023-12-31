import { DetailSection, OverviewSection, RelatedSection } from "./_sections";
import { Box } from "@mui/material";

export async function generateStaticParams() {
  // Replace this with your own logic to fetch the possible values for [...slug]
  const slugs = ["mock-slug-1", "mock-slug-2"];

  return slugs.map((slug: string) => ({
    params: { slug: slug.split("/") }, // Split the slug into its parts
  }));

}

function EventDetailPage({ params }: { params: { slug: string } }) {
  // console.log(params.slug)
  return (
    <Box className="flex-col flex w-full">
      <OverviewSection />
      <DetailSection />
      <RelatedSection />
    </Box>
  );
}

export default EventDetailPage;
