import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Head from "next/head";
import AnimationT from './components/AnimationT';

const scholar = {
  "PhD": {
    "student1": {
      "name": "Pratik Chowdhury",
      "status": "PhD(Ongoing)",
      "picture": "https://nitdgp.ac.in/uploads/69e7d22e20def0bf547f86e679fb406f.jpeg",
      "description": "description"
    },
    "student2": {
      "name": "Anil Bikash Chowdhury",
      "status": "PhD (Part Time) (Completed)",
      "picture": "https://nitdgp.ac.in/uploads/0612d2c218361907e5247f2c18e95ac1.jpg",
      "description": "description"
    },
    "student3": {
      "name": "Anjan Bandyopadhyay",
      "status": "PhD (Completed)",
      "picture": "https://nitdgp.ac.in/uploads/924ab812a3533469c5f6b283580d49bf.jpg",
      "description": "description"
    },
    "student4": {
      "name": "Vikash Kumar Singh",
      "status": "PhD (Completed)",
      "picture": "https://nitdgp.ac.in/uploads/333cdffd13d47680a84dc14836cea48e.jpg",
      "description": "description"
    },
    "student5": {
      "name": "Naren Debnath",
      "status": "PhD(Ongoing)",
      "picture": "https://nitdgp.ac.in/uploads/cb63d079c9c50625a71deaf3a47affd5.jpg",
      "description": "happy birthday to you"
    },
    "student6": {
      "name": "Pritam Shil",
      "status": "PhD (Ongoing)",
      "picture": "https://scontent.fdbd3-1.fna.fbcdn.net/v/t39.30808-6/284598933_1055075105426351_12150573851957659_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7edcM-e3ODgQ7kNvgFXIYeL&_nc_ht=scontent.fdbd3-1.fna&oh=00_AYB9it5YWIxyyf43v8yNLhn0ROfXmR1iHxu6VOAcxMWNCw&oe=66C4C563",
      "description": "the new guy"
    }
  },
  "MTech": {},
  "BTech": {}
};
export default function Students() {
  const [tabValue, setTabValue] = useState("PhD");
  const [open, setOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleClickOpen = (student) => {
    setSelectedStudent(student);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedStudent(null);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Head>
        <title>Students</title>
        <meta name="description" content="any description" />
      </Head>
      <Box sx={{ mt: 4, p: 2, border: '1px solid #ccc', borderRadius: 2, boxShadow: 1, flexGrow: 1, overflow: 'auto' }}>
        <Tabs value={tabValue} onChange={handleChange} centered>
          <Tab
            label="PhD"
            value="PhD"
            sx={{
              "&:hover": {
                color: '#1976d2',
                backgroundColor: '#e3f2fd',
              },
            }}
          />
          <Tab
            label="MTech"
            value="MTech"
            sx={{
              "&:hover": {
                color: '#1976d2',
                backgroundColor: '#e3f2fd',
              },
            }}
          />
          <Tab
            label="BTech"
            value="BTech"
            sx={{
              "&:hover": {
                color: '#1976d2',
                backgroundColor: '#e3f2fd',
              },
            }}
          />
        </Tabs>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, p: 2 }}>
          {Object.keys(scholar[tabValue]).length === 0 ? (
            <Typography variant="h6" color="text.secondary">No content for now</Typography>
          ) : (
            Object.values(scholar[tabValue]).map((student, index) => (
              <Card
                key={index}
                sx={{
                  display: 'flex',
                  width: '100%',
                  maxWidth: 800,
                  p: 1,
                  cursor: 'pointer',
                  backgroundColor: '#dddbd6',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    backgroundColor: '#e0f2e9', // Light green shade
                    transform: 'scale(1.02)',
                    transition: 'transform 0.2s',
                  },
                  height: 80,
                }}
                onClick={() => handleClickOpen(student)}
              >
                <Avatar
                  alt={student.name}
                  src={student.picture}
                  sx={{ width: 60, height: 60, marginRight: 2 }}
                />
                <CardContent sx={{ flexGrow: 1, padding: '8px 0 4px 0' }}>
                  <Typography variant="h6" sx={{ fontSize: '1rem' }}>{student.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 0 }}>
                    {student.status}
                  </Typography>
                </CardContent>
              </Card>
            ))
          )}
        </Box>

        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogContent sx={{ minHeight: 500, maxHeight: '80vh', overflow: 'auto' }}>
            {selectedStudent && (
              <Card sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar
                    alt={selectedStudent.name}
                    src={selectedStudent.picture}
                    sx={{ width: 100, height: 100, marginRight: 2 }}
                  />
                  <Box>
                    <Typography variant="h5">
                      {selectedStudent.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {selectedStudent.status}
                    </Typography>
                  </Box>
                </Box>
                {selectedStudent.description && (
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {selectedStudent.description}
                  </Typography>
                )}
              </Card>
            )}
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
}