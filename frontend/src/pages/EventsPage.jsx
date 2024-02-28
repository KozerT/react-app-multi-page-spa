import { useLoaderData } from "react-router";
import EventsList from "../components/EventsList.jsx";

const EventsPage = () => {
  const events = useLoaderData();
  return (
    <>
      <EventsList events={events} />
    </>
  );
};

export default EventsPage;
