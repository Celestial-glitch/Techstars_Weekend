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
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  margin-top: 40px;
  border-top: 2px solid #52b752;
`;

const Heading = styled.h2`
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: center;
  color: #1a1a1a;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const SubHeading = styled.h5`
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 40px;
  text-align: center;
  color: #52b752;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #333;
  font-size: 1.1rem;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  padding: 24px;
  width: 65vw;
  margin: 12px 0px;
  background: white;
  transition: all 0.3s ease;
  border-left: 4px solid #52b752;

  &:hover {
    box-shadow: 0 4px 20px rgba(82, 183, 82, 0.2);
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
  color: #1a1a1a;
  cursor: pointer;
`;

const Answer = styled.div`
  font-size: 0.95em;
  color: #555;
  margin-top: 15px;
  line-height: 1.6;

  hr {
    border: none;
    border-top: 1px solid #e0e0e0;
    margin: 10px 0;
  }
`;

const Button = styled.button`
  color: #52b752;
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
