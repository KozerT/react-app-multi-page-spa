import { Await, defer, json, useLoaderData } from "react-router";
import EventsList from "../components/EventsList.jsx";
import { Suspense } from "react";

export const EventsPage = () => {
  const data = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading</p>}>
      <Await resolve={data.events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
};

export default EventsPage;

export const loader = () => {
  return defer({
    events: loadEvents(),
  });
};

const loadEvents = async () => {
  const response = await fetch("http://localhost:8000/events");

  if (!response.ok) {
    // throw new Response(
    //   JSON.stringify({ message: "Could not fetch events" }, { status: 500 })
    // );
    return json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
};
