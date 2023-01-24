import { useRouter } from "next/router";
import { DUMMY_EVENTS } from "../../data/dummy-data";

function EventDetail() {
  const router = useRouter();
  console.log(router.query);

  const data = DUMMY_EVENTS.filter((event) => event.id === router.query.id);
  const detail = { ...data[0] };

  return (
    <div>
      <h1>{detail.title}</h1>
      <p>Description: {detail.description}</p>
      <p>Location: {detail.location}</p>
      <p>Date: {detail.date}</p>
    </div>
  );
}

export default EventDetail;
