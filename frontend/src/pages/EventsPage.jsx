import { useLoaderData } from "react-router";
import EventsList from "../components/EventsList.jsx";

export const loader = async () => {
  const response = await fetch("http://localhost:8000/events");

  if (!response.ok) {
    //
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export const EventsPage = () => {
  const events = useLoaderData();

  return (
    <>
      <EventsList events={events} />
    </>
  );
};

export default EventsPage;
