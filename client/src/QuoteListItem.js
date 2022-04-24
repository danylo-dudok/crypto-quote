import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const getQuoteListItem = (quote, index) => (
  <ListItem alignItems="flex-start" key={index}>
    <ListItemAvatar>
      <Avatar alt="Avatar" src={quote.avatarLink} />
    </ListItemAvatar>
    <ListItemText
        primary={quote.userAddress}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              { quote.text }
            </Typography>
          </React.Fragment>
        }
      />
  </ListItem>
);
  
const getQuoteListItems = (quotes) =>
  quotes.map((quote, index) => getQuoteListItem(quote, index));

export default getQuoteListItems;
