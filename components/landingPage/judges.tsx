"use client"
import Image from "next/image";
import React, { FunctionComponent } from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { ListOfJudges } from "@/lib/samplejudges.js";
import styled from 'styled-components';

interface OwnProps {}

type Props = OwnProps;

const Heading = styled.h2`
  font-size: 2em;
  color: hsl(var(--foreground));
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
`;

const JudgeInfo = styled.div`
  margin-top: 10px;
  text-align: center;

  h3 {
    margin: 10px 0 5px;
    font-size: 1.2em;
    color: #00b0f0;
    font-weight: bold;
  }

  p {
    margin: 0;
    color: rgb(161, 161, 170);
    word-wrap: break-word; /* Ensure word wrapping */
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

const Card = styled.div`
  margin: 50px;
  padding: 20px;
  width: 250px; /* Adjust the width as needed */
  border-radius: 8px;
  background-color: rgba(24, 24, 27, 0.6);
  border: 1px solid rgb(39, 39, 42);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(0, 176, 240, 0.4);
    box-shadow: 0 0 20px rgba(0, 176, 240, 0.15);
    transform: translateY(-4px);
  }
`;

const JudgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Judges: FunctionComponent<Props> = (props) => {
  return (
    <div className="mt-7 max-w-screen">
      <Heading>Judges</Heading>
      <JudgesContainer>
        {ListOfJudges.map((data, index) => (
          <Card key={index}>
            <Image
              src={data.src}
              alt={data.alt}
              height={200}
              width={200}
              className="mr-5 mb-4"
            />
            <JudgeInfo>
              <h3>{data.head}</h3>
              <p className="line-clamp-5">{data.info}</p>
              <div>
                <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin style={{ fontSize: '40px', color: '#0a66c2' }} />
                </a>
              </div>
            </JudgeInfo>
          </Card>
        ))}
      </JudgesContainer>
    </div>
  );
};

export default Judges;