import { Box, Button, ListItem } from "@mui/material";

interface EventReviewProps {
  imgUrls: string[];
  eventName: string;
  description: string;
  organization: string;
  location: string;
  businessView: boolean;
}

function EventReview({
  imgUrls,
  eventName,
  description,
  organization,
  location,
  businessView,
}: EventReviewProps) {
  return (
    <>
      <Box
        // component={}
        display="flex"
        p={1}
        border={1}
        height={300}
        alignItems="center"
        justifyContent="center"
      >
        {imgUrls.map((e) => (
          <ListItem>
            <Box width={200} height={200} border={1} borderColor="divider">
              <Box
                width="100%"
                height="100%"
                component="img"
                src={e}
                sx={{ objectFit: "contain" }}
              />
            </Box>
          </ListItem>
        ))}
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={3}
        my={4}
        border={1}
      >
        {eventName}
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={150}
        p={1}
        my={1}
        border={1}
      >
        {description}
      </Box>

      <Box
        display="flex"
        my={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box py={1} px={5} border={1}>
          {organization}
        </Box>
        <Box py={1} px={5} border={1}>
          {location}
        </Box>
      </Box>

      {businessView && (
        <Box
          display="flex"
          my={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Button variant="outlined" sx={{ py: 1, px: 5 }}>
            Tài trợ
          </Button>
          <Button variant="outlined" sx={{ py: 1, px: 5 }}>
            Quan tâm
          </Button>
        </Box>
      )}

      <Button
        variant="outlined"
        sx={{ py: 1, px: 5, my: 2, width: "max-content" }}
      >
        Xem thêm
      </Button>
    </>
  );
}

export default EventReview;
