import Link from "next/link";
import { useRouter } from "next/router";
import { DUMMY_EVENTS } from "../../data/dummy-data";

function Events() {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>All Events</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link href={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;
