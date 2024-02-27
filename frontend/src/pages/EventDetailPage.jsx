import { useParams } from "react-router";

const EventDetailPage = () => {
  const params = useParams();
  return (
    <div>
      <h1>Event Detail Page page</h1>
      <p> Event ID: {params.eventId}</p>
    </div>
  );
};

export default EventDetailPage;
