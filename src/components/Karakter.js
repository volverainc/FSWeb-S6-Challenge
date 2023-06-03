// Karakter bileşeniniz buraya gelecek
import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

const Karakter = ({name,gender,height,mass,birth_year,eye_color,hair_color,skin_color}) => {
    const [open, setOpen] = useState('0');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };
    return(
        <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">{name}</AccordionHeader>
          <AccordionBody accordionId="1">
              <ul>
     <li><b>Gender:</b> {gender}</li>
     <li><b>Height:</b> {height}</li>
     <li><b>Mass:</b> {mass}</li>
     <li><b>Birth Year:</b> {birth_year}</li>
     <li><b>Eye Color:</b> {eye_color}</li>
     <li><b>Hair Color:</b> {hair_color}</li>
     <li><b>Skin Color:</b> {skin_color}</li>
 </ul>
          </AccordionBody>
        </AccordionItem>
        
      </Accordion>
    </div>
)
}
export default Karakter;
