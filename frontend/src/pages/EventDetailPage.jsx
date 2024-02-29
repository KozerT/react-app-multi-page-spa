import { json, redirect, useRouteLoaderData } from "react-router";
import EventItem from "../components/EventItem";

export const loader = async ({ request, params }) => {
  const id = params.eventId;
  const response = await fetch(`http://localhost:8000/events/${id}`);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch the details for the selected events" },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
};

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
  const data = useRouteLoaderData("event-detail");

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  return <EventItem event={data.event} />;
};

export default EventDetailPage;
