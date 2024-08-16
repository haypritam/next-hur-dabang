import React from "react";
import AnimationT from './components/AnimationT';
import Head from "next/head";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Layoutt from "./components/Layoutt";



const papers = {
  "paper1": {
      "title": "A truthful budget feasible mechanism for IoT-based participatory sensing with incremental arrival of budget.",
      "url": "https://dblp.org/rec/journals/jaihc/MukhopadhyaySMP22"
  },
  "paper2": {
      "title": "An egalitarian approach of scheduling time restricted tasks in mobile crowdsourcing for double auction environment.",
      "url": "https://dblp.org/rec/journals/ijwgs/MukhopadhyaySMD21"
  },
  "paper3": {
      "title": "A Balanced Dissemination of Time Constraint Tasks in Mobile Crowdsourcing: A Double Auction Perspective.",
      "url": "https://dblp.org/rec/conf/3pgcic/MukhopadhyaySMP20"
  },
  "paper4": {
      "title": "Online Participatory Sensing in Double Auction Environment with Location Information.",
      "url": "https://dblp.org/rec/journals/corr/MukhopadhyaySMP17"
  },
  "paper5": {
      "title": "Mitigating Procrastination in Crowdsourcing Via Efficient Scheduling Algorithm.",
      "url": "https://dblp.org/rec/journals/corr/abs-2401-00681"
  },
  "paper6": {
      "title": "A truthful mechanism for crowdsourcing-based tourist spot detection in smart cities.",
      "url": "https://dblp.org/rec/journals/ijguc/ChowdhurySMKD22"
  },
  "paper7": {
      "title": "An Incentive Framework for Surplus Food Distribution in the Context of Smart Cities.",
      "url": "https://dblp.org/rec/conf/nbis/SanyalMXSS22"
  },
  "paper8": {
      "title": "An Efficient Framework for Resource Allocation and Dynamic Pricing Scheme for Completion Time Failure in Cloud Computing.",
      "url": "https://dblp.org/rec/conf/nbis/BandyopadhyaySM21"
  },
  "paper9": {
      "title": "A Game Theoretic Framework for Surplus Food Distribution in Smart Cities and Beyond.",
      "url": "https://dblp.org/rec/journals/corr/abs-2102-04929"
  },
  "paper10": {
      "title": "Indian Kidney Exchange Program: A Game Theoretic Perspective.",
      "url": "https://dblp.org/rec/journals/corr/abs-2112-02932"
  },
  "paper11": {
      "title": "A mechanism design framework for hiring experts in e-healthcare.",
      "url": "https://dblp.org/rec/journals/eis/SinghMX20"
  },
  "paper12": {
      "title": "A budget feasible peer graded mechanism for iot-based crowdsourcing.",
      "url": "https://dblp.org/rec/journals/jaihc/SinghMXS20"
  },
  "paper13": {
      "title": "Matching IoT Devices to the Fog Service Providers: A Mechanism Design Perspective.",
      "url": "https://dblp.org/rec/journals/sensors/BandyopadhyaySM20"
  },
  "paper14": {
      "title": "A Quality-Assuring, Combinatorial Auction Based Mechanism for IoT-Based Crowdsourcing.",
      "url": "https://dblp.org/rec/series/apc/SinghMXK20"
  },
  "paper15": {
      "title": "An auction framework for DaaS in cloud computing and its evaluation.",
      "url": "https://dblp.org/rec/journals/ijwgs/BandyopadhyayXM19"
  },
  "paper16": {
      "title": "A Framework for Allocation of IoT Devices to the Fog Service Providers in Strategic Setting.",
      "url": "https://dblp.org/rec/conf/3pgcic/BandyopadhyayXM19"
  },
  "paper17": {
      "title": "Hiring Expert Consultants in E-Healthcare: An Analytics-Based Two Sided Matching Approach.",
      "url": "https://dblp.org/rec/journals/tcci/SinghMXSR18"
  },
  "paper18": {
      "title": "A Budget Feasible Mechanism for Hiring Doctors in E-Healthcare.",
      "url": "https://dblp.org/rec/conf/aina/SinghMXS18"
  },
  "paper19": {
      "title": "An Auction Framework for DaaS in Cloud Computing.",
      "url": "https://dblp.org/rec/conf/eidwt/BandyopadhyayXM18"
  },
  "paper20": {
      "title": "Spectrum Trading in Wireless Communication for Tertiary Market.",
      "url": "https://dblp.org/rec/conf/incos/ChowdhuryXRMS18"
  },
  "paper21": {
      "title": "A Budget Feasible Peer Graded Mechanism For IoT-Based Crowdsourcing.",
      "url": "https://dblp.org/rec/journals/corr/abs-1809-09315"
  },
  "paper22": {
      "title": "Hiring Doctors in E-Healthcare with Zero Budget.",
      "url": "https://dblp.org/rec/conf/3pgcic/SinghMD17"
  },
  "paper23": {
      "title": "On free of cost service distribution in cloud computing.",
      "url": "https://dblp.org/rec/conf/icacci/BandyopadhyayMG17"
  },
  "paper24": {
      "title": "Hiring Expert Consultants in E-Healthcare: A Two Sided Matching Approach.",
      "url": "https://dblp.org/rec/journals/corr/SinghMSR17"
  },
  "paper25": {
      "title": "Allocating resources in cloud computing when users have strict preferences.",
      "url": "https://dblp.org/rec/conf/icacci/BandyopadhyayMG16"
  },
  "paper26": {
      "title": "Hiring Doctors in E-Healthcare With Zero Budget.",
      "url": "https://dblp.org/rec/journals/corr/SinghM16"
  },
  "paper27": {
      "title": "Hiring Expert Consultants in E-Healthcare With Budget Constraint.",
      "url": "https://dblp.org/rec/journals/corr/SinghM16a"
  },
  "paper28": {
      "title": "Auction aware selection of doctors in E-Healthcare.",
      "url": "https://dblp.org/rec/conf/healthcom/SinghMDC15"
  },
  "paper29": {
      "title": "Incentive and Quality Aware Participatory Sensing System.",
      "url": "https://dblp.org/rec/conf/dasc/BhattacharjeePMB14"
  },
  "paper30": {
      "title": "Auction Based Ticket Selling Schemes with Multiple Demand from the Agents in Static Environment.",
      "url": "https://dblp.org/rec/conf/itcs2/MukhopadhyayGDR13"
  }
};


export default function Research() {
  return (
    <>
    <Layoutt className="pt-11">
    <div className="  flex flex-col items-center self-center">
      <Head>
        <title>Publications</title>
        <meta name="description" content="any description" />
      </Head>
      <AnimationT text='Publications' className=" font-titleFont"/>
      <Container>
        <List>
          {Object.keys(papers).map((key) => (
            <ListItem
              key={key}
              sx={{
                margin: '8px 0',
                padding: '16px',
                backgroundColor: '#f0f0f0',  // Light grey background
                color: '#333',  // Dark grey text
                borderRadius: '8px',
                transition: 'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: '#e0e0e0',  // Slightly darker grey on hover
                },
              }}
            >
              <Link
                href={papers[key].url}
                target="_blank"
                rel="noopener"
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <ListItemText primary={papers[key].title} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
    </Layoutt>
    </>
    
  );
}










