import React from 'react';
import DocumentHeading from './components/DocumentHeading';
import CardHeading from './components/CardHeading'
import ButtonText from './components/ButtonText'
import Button from './components/Button'
import CourseCard from './components/CourseCard'
import StepCard from './components/StepCard'
import MissingPathway from './components/MissingPathway'
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';

function App() {
  return (
    <div>
      <DocumentHeading text="Learning Pathways"/>
      <CardHeading text="Heading" />
      <ButtonText text="Button" />
      <Button text="view all course docs" />
      <CourseCard />
      <StepCard />
      <MissingPathway />
    </div>
  );
}

export default App;
