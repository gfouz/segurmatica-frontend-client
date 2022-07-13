import * as React from "react";
import { Link } from 'react-router-dom' 
import CaretLeft from '../../icons/CaretLeft'
import { Heading, HStack } from "@chakra-ui/react";
import styled from "styled-components";



function Policy() {
  return (
    <>
     <StyledPolicy>
     <article className="policy">
      <Heading className="policy__title"> Terminos y condiciones de Segurmática </Heading>
      <p>
         You might think you can line things up and create some interesting effects by
         stringing together two or more spaces. Ha! Web browsers chew up all those
         extra spaces and spit them out into the nether regions of cyberspace. Why?
         Well, the philosophy of the web is that you can use only HTML tags to lay out a
         document. So a run of multiple spaces (or white space, as it’s called) is ignored.
         »Tabs also fall under the rubric of white space. You can enter tabs all day long,
         but the browser ignores them completely.
      </p>
      <Link className="policy__link" to="/renovacion">
       <HStack spacing='16px'>
        <CaretLeft/>
         <span>regresar</span>
       </HStack>
      </Link>
     </article> 
     </StyledPolicy> 
    </>
  );
}

export default Policy;

const StyledPolicy = styled.div`
   min-height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;

   .policy {
     padding: 2em;
     max-width: 600px;
     background-color: #f1f1f1;
   }
   .policy__title {
      color: #888888;
      font-size: 20px;
   }
   .policy__link {
     text-transform: uppercase;
     font-weight: bolder;
     color: #0660b1;
   }
   
   p {
     color: #444444;
     font-family: calibri;
   }
`;