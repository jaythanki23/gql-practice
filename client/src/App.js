import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Clients from './components/Clients';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
})


function App() {
  return (
    <>
      <ApolloProvider client={client} >
        <Clients />
      </ApolloProvider>
    </>
  );
}

export default App;
