const sectionIds = {
  question: "pregunta-conceptual",
  information: "informacion-involucrada",
  relationships: "relaciones-y-patrones",
  decision: "decision-del-participante",
  representation: "representacion-y-entregable",
  technology: "tecnologia-necesaria",
  portfolio: "relacion-con-el-portafolio",
};

export function TopicContent({ lesson }) {
  return (
    <>
      <p>
        <strong>{lesson.module.title}</strong>
      </p>
      <h1>{lesson.title}</h1>
      <p>{lesson.description}</p>

      <h2 id={sectionIds.question}>Pregunta conceptual</h2>
      <p>{lesson.question}</p>

      <h2 id={sectionIds.information}>Información involucrada</h2>
      <p>
        El trabajo parte del contenido real del participante: proyectos,
        materiales, decisiones, referencias, archivos, textos y evidencias de
        proceso que permitan comprender su práctica profesional.
      </p>

      <h2 id={sectionIds.relationships}>Relaciones y patrones</h2>
      <p>
        El objetivo es reconocer relaciones entre contenido, identidad,
        estructura y representación. La información no se evalúa de forma
        aislada; se compara para descubrir patrones que puedan convertirse en
        decisiones de diseño y desarrollo.
      </p>

      <h2 id={sectionIds.decision}>Decisión del participante</h2>
      <p>{lesson.activity}</p>

      <h2 id={sectionIds.representation}>Representación y entregable</h2>
      <p>{lesson.deliverable}</p>

      <h2 id={sectionIds.technology}>Tecnología necesaria</h2>
      <p>{lesson.module.technology}</p>

      <h2 id={sectionIds.portfolio}>Relación con el portafolio</h2>
      <p>
        Cada decisión debe avanzar el portafolio real del participante. La
        tecnología se introduce sólo cuando ayuda a representar mejor la
        información, sostener el sistema visual o construir una experiencia
        funcional y mantenible.
      </p>
    </>
  );
}
