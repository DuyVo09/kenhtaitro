import { getDetailPublishedEvent } from "@/apis/events";
import { DetailSection, OverviewSection, RelatedSection } from "./_sections";
import { Box } from "@mui/material";

async function EventDetailPage({ params } : { params: any}) {
  const data = (await getDetailPublishedEvent(params.id)).data;
  return (
    <Box className="flex-col flex w-full">
      <OverviewSection data={data!}/>
      <DetailSection data={data!} />
      <RelatedSection id={params.id}/>
    </Box>
  );
}

export default EventDetailPage;
