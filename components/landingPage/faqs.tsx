"use client";
import React, { useState } from "react";
import styled from "styled-components";
import FAQData from "@/lib/list_of_faqs";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  width: 100%;
  background: linear-gradient(135deg, #09090b 0%, #18181b 100%);
  margin-top: 40px;
  border-top: 2px solid #00b0f0;
`;

const Heading = styled.h2`
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: center;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const SubHeading = styled.h5`
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 40px;
  text-align: center;
  color: #00b0f0;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: rgb(228, 228, 231);
  font-size: 1.1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  padding: 24px;
  width: 65vw;
  margin: 12px 0px;
  background: rgba(24, 24, 27, 0.6);
  border: 1px solid rgb(39, 39, 42);
  border-left: 4px solid #00b0f0;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 176, 240, 0.15);
    border-color: rgba(0, 176, 240, 0.4);
    border-left-color: #00b0f0;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 0.95em;
    width: 90vw;
    padding: 18px;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

const Question = styled.div`
  flex: 1;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
`;

const Answer = styled.div`
  font-size: 0.95em;
  color: rgb(161, 161, 170);
  margin-top: 15px;
  line-height: 1.6;

  hr {
    border: none;
    border-top: 1px solid rgb(39, 39, 42);
    margin: 10px 0;
  }
`;

const Button = styled.button`
  color: #00b0f0;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.2);
  }
`;

const FAQs: React.FC = () => {
  const faqs = FAQData.filter((t) => t?.question && t?.answer);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <Container>
      <Heading>Frequently Asked Questions</Heading>
      <SubHeading>(FAQs)</SubHeading>
      <>
        {faqs.map((faq, index) => (
          <Card key={index}>
            <Top onClick={() => toggle(index)}>
              <Question>
                {faq.question}
              </Question>
              <Button onClick={(e) => {
                e.stopPropagation();
                toggle(index);
              }}>
                {openIndex === index ? "−" : "+"}
              </Button>
            </Top>
           
            {openIndex === index && <Answer><hr/>{faq.answer}</Answer>}
          </Card>
        ))}
      </>
    </Container>
  );
};

export default FAQs;