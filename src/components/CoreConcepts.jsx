import CoreConcept from './CoreConcept.jsx';
import Section from './Section.jsx';
import { CORE_CONCEPTS } from '../data';

export default function CoreConcepts() {
  return (
    <Section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem, index) => (
          <>
            <CoreConcept key={index} {...conceptItem} />
          </>
        ))}
      </ul>
    </Section>
  );
}
