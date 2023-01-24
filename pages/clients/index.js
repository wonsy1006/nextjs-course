import { useRouter } from "next/router";
import Link from "next/link";

function ClientsPage() {
  const router = useRouter();
  console.log(router.query);
  // const clients = [
  //   { id: "max", name: "Maximilian" },
  //   { id: "manu", name: "Manuel" },
  // ];

  function loadProjectHandler() {
    // load data...
    // router.push("/clients/max/projecta");
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  }

  return (
    <div>
      <h1>The Clients Page</h1>
      {/* <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul> */}
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientsPage;
