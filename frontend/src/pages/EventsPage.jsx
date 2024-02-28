import { json, useLoaderData } from "react-router";
import EventsList from "../components/EventsList.jsx";

export const loader = async () => {
  const response = await fetch("http://localhost:8000/events");

  if (!response.ok) {
    // throw new Response(
    //   JSON.stringify({ message: "Could not fetch events" }, { status: 500 })
    // );
    return json({ message: "Could not fetch events" }, { status: 500 });
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
