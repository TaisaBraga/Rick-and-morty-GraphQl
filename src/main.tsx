import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CharactersResultProvider } from './components/context/CardContext'
import { client } from './lib/apollo'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CharactersResultProvider>
        <App />
      </CharactersResultProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
