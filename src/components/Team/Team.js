import React from "react";
import { Grid } from "@mui/material";
import Andrei from "../../assets/team/andrei.jpg";
import Raey from "../../assets/team/raey.jpg";
import Khadija from "../../assets/team/khadija.jpg";
import Sanidhya from "../../assets/team/sanidhya.jpg";
import ruth from "../../assets/team/Ruth.jpeg";
import Meri from "../../assets/team/meri.jpg";
import Muslim from "../../assets/team/Muslim.jpg";
import Timothy from "../../assets/team/Timothy.jpeg";
import Pratul from "../../assets/team/Pratul.jpg";
import Arleny from "../../assets/team/Arleny.jpeg";
import Aya from "../../assets/team/Aya.jpeg";
import Elizaveta from "../../assets/team/Elizaveta.jpg";
import Imane from "../../assets/team/Imane.jpg";
import Janat from "../../assets/team/Janat.jpeg";
import Mauricio from "../../assets/team/Mauricio.jpeg";
import Manuela from "../../assets/team/Manuela.jpg";
import Yasmine from "../../assets/team/Yasmine.jpeg";
import Serra from "../../assets/team/Serra.jpeg";
import Sophie from "../../assets/team/Sophie.jpg";
import "./team.css";

const TeamMember = ({ image, name, role, linkedinUserName }) => {
  let linkedinUrl;
  if (linkedinUserName) {
    linkedinUrl = "https://www.linkedin.com/in/" + linkedinUserName;
  } else {
    linkedinUrl = "";
  }

  return (
    <div className="team-member">
      <a href={linkedinUrl} target="_blank">
        <img src={image} alt={`team-member ${name}`} />
        <div className="name-overlay">
          <h1>{name}</h1>
          <p>{role}</p>
        </div>
      </a>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      image: Andrei,
      name: "Andrei Bancila",
      role: "Main Oraganisor",
      linkedinUserName: "andrei-bancila",
    },
    {
      image: Yasmine,
      name: "Yasmine Ammouze",
      role: "Main Oraganisor",
      linkedinUserName: "",
    },
    {
      image: Raey,
      name: "Raey Getahun",
      role: "Head of IT & Design Team",
      linkedinUserName: "raey-getahun/",
    },
    {
      image: Sanidhya,
      name: "Sanidhya Singh ",
      role: "Head of Recruitment Team",
      linkedinUserName: "sanidhya-singh-9879b7268/",
    },
    {
      image: ruth,
      name: "Ruth Jebessa",
      role: "Head of Logistics Team",
      linkedinUserName: "ruth-jebessa-012a84257/",
    },
    {
      image: Khadija,
      name: "Khadija Soua",
      role: "Head of Marketing Team",
      linkedinUserName: "khadija-soua-9a6282217/",
    },
    {
      image: Timothy,
      name: "Timothy Ross B. Cabiles",
      role: "Head of Finance & Sponsorship Team",
      linkedinUserName: "",
    },
    {
      image: Elizaveta,
      name: "Elizaveta Eremina",
      role: "Member of IT & Design Team",
      linkedinUserName: "",
    },
    {
      image: Meri,
      name: "Meri Grigoryan",
      role: "Member of IT & Design Team",
      linkedinUserName: "",
    },
    {
      image: Muslim,
      name: "Muslim Bayemirov",
      role: "Member of IT & Design Team",
      linkedinUserName: "",
    },
    {
      image: Pratul,
      name: "Pratul Aryan",
      role: "Member of Recruitment Team",
      linkedinUserName: "",
    },
    {
      image: Aya,
      name: "Aya chguiri",
      role: "Memeber of Recruitment Team",
      linkedinUserName: "",
    },
    {
      image: Mauricio,
      name: "Mauricio Dávila Alarcón",
      role: "Member of the Recruitment & Logistics Teams",
      linkedinUserName: "",
    },
    {
      image: Janat,
      name: "Janat Derawi",
      role: "Member of Logistics & Recruitment Teams",
      linkedinUserName: "",
    },
    {
      image: Manuela,
      name: "Manuela Jaramillo",
      role: "Member of the Finance & Sponsorship Team",
      linkedinUserName: "",
    },
    {
      image: Sophie,
      name: "Sophie Koester",
      role: "Member of Marketing Team",
      linkedinUserName: "",
    },
    {
      image: Arleny,
      name: "Arleny Maria Lanza Guilleb",
      role: "Member of Marketing Team",
      linkedinUserName: "",
    },
    {
      image: Imane,
      name: "Imane Zerhouni",
      role: "Member of the Logistics Team",
      linkedinUserName: "",
    },
    {
      image: Serra,
      name: "Serra Tosun",
      role: "Member of the Finance & Sponsors Team",
      linkedinUserName: "",
    },
    {
      image: "https://via.placeholder.com/300",
      name: "Sara Albeyrouti",
      role: "Member of Marketing Team",
      linkedinUserName: "",
    },
  ];

  return (
    <section id="team-section" className="team-section">
      <div className="text-container-team">
        <h1>OUR TEAM</h1>
      </div>

      <Grid container spacing={3}>
        <div className="image-container-team">
          {teamMembers.map((member, index) => (
            <Grid item xs={6} sm={6} lg={3} md={4}  key={index}>
              <TeamMember
                image={member.image}
                name={member.name}
                role={member.role}
                linkedinUserName={member.linkedinUserName}
              />
            </Grid>
          ))}
        </div>
      </Grid>
    </section>
  );
};

export default Team;
