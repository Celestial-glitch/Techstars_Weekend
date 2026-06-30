// src/components/Mentors.tsx
"use client"
import React from 'react';
import styled from 'styled-components';
import Mentor from "@/lib/listofmentors.js"
import Image from "next/image"
import { FaLinkedin} from "react-icons/fa";
interface OwnProps {} 

type Props = OwnProps;



const MentorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Heading = styled.h2`
  font-size: 2em;
  color: hsl(var(--foreground));
  margin-bottom: 20px;
  font-weight: bold;
`;
const CardsContainer = styled.div`
  display: grid;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 601px) and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;//See this change done for responsiveness in small screens.


const MentorCard = styled.div`
  background-color: rgba(24, 24, 27, 0.6);
  border: 1px solid rgb(39, 39, 42);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  width: 300px;
  text-align: center;
  padding: 30px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(0, 176, 240, 0.4);
    box-shadow: 0 0 20px rgba(0, 176, 240, 0.15);
    transform: translateY(-4px);
  }
`;

const MentorPhoto = styled.div`
display: flex;
  justify-content: center;
  margin-bottom: 15px;
  img {
    border-radius: 50%;
    width: 120px;
    height: 120px;
  }
`;

const MentorInfo = styled.div`
  margin-top: 10px;

  h3 {
    margin: 10px 0 5px;
    font-size: 1.2em;
    color: #00b0f0;
    font-weight: bold;
  }

  p {
    margin: 0;
    color: rgb(161, 161, 170);
  }
    a {
    display: inline-block;
    margin-top: 10px;
    color: #00b0f0;
    text-decoration: none;
    font-weight: bold; /* Bold text for the link */
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Mentors: React.FC = () => {
  return (
    <MentorsContainer>
      <Heading>Meet Our Mentors</Heading>
      <CardsContainer>
        {Mentor.map((ment, index) => (
          <MentorCard key={index}>
            <div className="flex justify-center content-center">
             <Image src={ment.src} alt={ment.alt} height={100} width={100} className="mr-5 mb-4 "></Image>
             </div>
            <MentorInfo>
              <h3>{ment.name}</h3>
              <p className="min-h-[48px]">{ment.title}</p>
              <div>
              <a href={ment.linkedin} target="_blank" rel="noopener noreferrer"> 
              <FaLinkedin style={{ fontSize: '40px', color: '#0a66c2' }} />
              </a>
              </div>
            </MentorInfo>
          </MentorCard>
        ))}
      </CardsContainer>
    </MentorsContainer>
  );
};

export default Mentors;