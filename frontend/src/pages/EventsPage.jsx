import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Some title e1",
  },
  {
    id: "e2",
    title: "Some title e2",
  },
];

const EventsPage = () => {
  return (
    <div>
      <h1>Events page</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}> {event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;
