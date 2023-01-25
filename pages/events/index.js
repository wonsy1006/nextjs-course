import Link from "next/link";
import { useRouter } from "next/router";

function AllEventsPage() {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>All Events</h1>
    </div>
  );
}

export default AllEventsPage;
