import { useLoaderData } from "react-router";
import EventsList from "../components/EventsList.jsx";

export const loader = async () => {
  const response = await fetch("http://localhost:8000/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
    throw { message: "Could not fetch events." };
  } else {
    return response;
  }
};

export const EventsPage = () => {
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>;
  }
  const events = data.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
};

export default EventsPage;
