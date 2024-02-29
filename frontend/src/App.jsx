import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage.jsx";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventACtion,
} from "./pages/EventDetailPage.jsx";
import NewEventPage, {
  action as newEventACtion,
} from "./pages/NewEventPage.jsx";
import EditEventPage from "./pages/EditEventPage.jsx";
import RootLayout from "./pages/Root.jsx";
import EventsRoot from "./pages/EventsRoot.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventACtion,
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage />, action: newEventACtion },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
