import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';

export default function BasicCard({ icon, title, numAds }) {
  return (
    <Card sx={{ minWidth: 275, display: 'flex', alignItems: 'center', padding: 2, justifyContent: 'center' }} className='MuiCard-root'>
      <Icon sx={{ fontSize: 40, color: '#003cff', marginRight: 2,padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{icon}</Icon>
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {numAds} ads available
        </Typography>
      </CardContent>
    </Card>
  );
}
