import { useRouter } from "next/router";

function EventPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>An Event</h1>
    </div>
  );
}

export default EventPage;
