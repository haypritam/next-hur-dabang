import React from "react";
import { AnimationT } from "./component/AnimationT";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const scholar = {
  "student1": {
    "name": "Pratik Chowdhury",
    "status": "PhD(Ongoing)",
    "picture": "https://nitdgp.ac.in/uploads/69e7d22e20def0bf547f86e679fb406f.jpeg"
  },
  "student2": {
    "name": "Anil Bikash Chowdhury",
    "status": "PhD (Part Time) (Completed)",
    "picture": "https://nitdgp.ac.in/uploads/0612d2c218361907e5247f2c18e95ac1.jpg"
  },
  "student3": {
    "name": "Anjan Bandyopadhyay",
    "status": "PhD (Completed)",
    "picture": "https://nitdgp.ac.in/uploads/924ab812a3533469c5f6b283580d49bf.jpg"
  },
  "student4": {
    "name": "Vikash Kumar Singh",
    "status": "PhD (Completed)",
    "picture": "https://nitdgp.ac.in/uploads/333cdffd13d47680a84dc14836cea48e.jpg"
  },
  "student5": {
    "name": "Naren Debnath",
    "status": "PhD(Ongoing)",
    "picture": "https://nitdgp.ac.in/uploads/cb63d079c9c50625a71deaf3a47affd5.jpg"
  },
};

export default function Students() {
  return (
    <div className="pt-2 w-full flex flex-col items-center self-center font-sans">
      <AnimationT text='Students' />
      <Box 
        display="flex" 
        flexWrap="wrap" 
        justifyContent="center" 
        alignItems="center" 
        gap={3} 
        p={2}
      >
        {Object.keys(scholar).map((key) => (
          <Card
            key={key}
            sx={{ 
              width: 400, 
              height: 400, 
              backgroundColor: '#f5f5f5', 
              transition: 'transform 0.3s ease-in-out',
              boxShadow: 3,
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 6,
              },
              display: 'flex',
              flexDirection: 'column'
            }}
            variant="outlined"
          >
            <CardMedia
              component="img"
              image={scholar[key].picture}
              alt={scholar[key].name}
              sx={{ 
                height: 200, 
                width: '100%', 
                objectFit: 'contain' // Changed from 'cover' to 'contain'
              }}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography gutterBottom variant="h5" component="div">
                {scholar[key].name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {scholar[key].status}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
}
