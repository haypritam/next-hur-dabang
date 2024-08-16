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

const scholar = {
  "PhD": {
    "student1": {
      "name": "Pratik Chowdhury",
      "status": "PhD(Ongoing)",
      "picture": "https://nitdgp.ac.in/uploads/69e7d22e20def0bf547f86e679fb406f.jpeg",
      "description":"description"
    },
    "student2": {
      "name": "Anil Bikash Chowdhury",
      "status": "PhD (Part Time) (Completed)",
      "picture": "https://nitdgp.ac.in/uploads/0612d2c218361907e5247f2c18e95ac1.jpg",
      "description":"description"
    },
    "student3": {
      "name": "Anjan Bandyopadhyay",
      "status": "PhD (Completed)",
      "picture": "https://nitdgp.ac.in/uploads/924ab812a3533469c5f6b283580d49bf.jpg",
      "description":"description"
    },
    "student4": {
      "name": "Vikash Kumar Singh",
      "status": "PhD (Completed)",
      "picture": "https://nitdgp.ac.in/uploads/333cdffd13d47680a84dc14836cea48e.jpg",
      "description":"description"
    },
    "student5": {
      "name": "Naren Debnath",
      "status": "PhD(Ongoing)",
      "picture": "https://nitdgp.ac.in/uploads/cb63d079c9c50625a71deaf3a47affd5.jpg",
      "description":"happy birthday to you"
    },
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
                sx={{ display: 'flex', width: '100%', maxWidth: 500, p: 1, cursor: 'pointer' }}
                onClick={() => handleClickOpen(student)}
              >
                <Avatar
                  alt={student.name}
                  src={student.picture}
                  sx={{ width: 80, height: 80, marginRight: 2 }}
                />
                <CardContent>
                  <Typography variant="h6">{student.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
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