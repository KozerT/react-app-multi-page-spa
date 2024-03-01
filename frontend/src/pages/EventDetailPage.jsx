import { Await, defer, json, redirect, useRouteLoaderData } from "react-router";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

export const action = async ({ params, request }) => {
  const id = params.eventId;
  const response = await fetch(`http://localhost:8000/events/${id}`, {
    method: request.method,
  });
  if (!response.ok) {
    throw json(
      { message: "Could not delete event" },
      {
        status: 500,
      }
    );
  }
  return redirect("/events");
};

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-detail");

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.eventId;

  return defer({
    event: loadEvent(id),
    events: loadEvents(),
  });
};

const loadEvent = async () => {
  const response = await fetch(`http://localhost:8000/events/${id}`);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch the details for the selected events" },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
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
