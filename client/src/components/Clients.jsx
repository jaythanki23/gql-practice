import { gql, useQuery } from "@apollo/client";

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  return (
    <>
      {!loading && !error && <h2>{data.clients.map(client => client.name)}</h2>}
    </>
  )
}

export default Clients