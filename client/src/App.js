import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { Quoter } from './contracts/quoter';
import { Account } from './contracts/account';
import SubmitForm from './SubmitForm';
import getQuoteListItems from './QuoteListItem';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[600],
    },
  },
});

  
const App = () => {
  const [quotesState, setQuotes] = useState(new Set([]));
  const [balanceState, setBalance] = useState(0);
  const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
  const account = new Account(contractAddress);
  const quoter = new Quoter(account);

  useEffect(() => {
    const loadAccount = async () => {
      await account.authorize();
    };
    const loadBalance = async () => {
      const balance = await account.getBalance();
      setBalance(balance);
    };
    const loadQuotes = async () => {
      const quotes = await quoter.get();
      setQuotes(new Set([...quotes]));
    };
    loadAccount().then(() => {
      loadBalance();
      loadQuotes();
    });
  }, [])

  const submitQuote = (quoter) => (textState) => () => {
    if (quotesState.has(textState)) {
      alert('Item already exists!');
      return;
    }
    quotesState.add(textState);
    quoter.add(textState);
  };
  const [textState, setText] = useState('');
  const onQuoteUpdate = (e) => {
    setText(e.target.value);
  }

  return (
    <ThemeProvider theme={theme}>
      <SubmitForm submitQuote={submitQuote} textState={textState} onQuoteUpdate={onQuoteUpdate} />
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        { getQuoteListItems([...quotesState].map(quote => ({text: quote}))) }
      </List>
    </ThemeProvider>
  );
}

export default App;
