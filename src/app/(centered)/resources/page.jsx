import {
  Breadcrumb,
  BreadcrumbHome,
  BreadcrumbSeparator,
  Breadcrumbs,
} from "@/components/breadcrumbs";
import { CenteredPageLayout } from "@/components/centered-layout";
import { ContentLink } from "@/components/content-link";
import { PageSection } from "@/components/page-section";

export const metadata = {
  title: "Recursos - Portfolio WebCraft",
  description:
    "Materiales de trabajo para organizar, diseñar, construir y publicar el portafolio durante el programa.",
};

export default function Page() {
  return (
    <CenteredPageLayout
      breadcrumbs={
        <Breadcrumbs>
          <BreadcrumbHome />
          <BreadcrumbSeparator />
          <Breadcrumb>Recursos</Breadcrumb>
        </Breadcrumbs>
      }
    >
      <h1 className="mt-10 text-3xl/10 font-normal tracking-tight text-gray-950 sm:mt-14 dark:text-white">
        Recursos
      </h1>
      <p className="mt-6 max-w-xl text-base/7 text-gray-600 dark:text-gray-400">
        Materiales de trabajo para convertir contenido, identidad, estructura,
        sistema visual y código en un portafolio publicado y mantenible.
      </p>

      <div className="mt-16 space-y-16">
        <PageSection title={<h2>Documentos base</h2>}>
          <p className="text-sm/8 text-gray-600 dark:text-gray-400">
            Archivos vivos para registrar decisiones y evitar que el proyecto
            dependa de memoria, intuición o conversaciones sueltas.
          </p>
          <div className="mt-8 max-w-2xl space-y-6">
            <ContentLink
              type="article"
              title="Inventario de contenido"
              description="Listado de proyectos, recursos disponibles, estado del material y vacíos por resolver."
              href="/inventario-de-contenido"
            />
            <ContentLink
              type="article"
              title="Síntesis conceptual"
              description="Texto de identidad profesional construido desde patrones reales del trabajo."
              href="/sintesis-conceptual"
            />
            <ContentLink
              type="article"
              title="Mapa de navegación"
              description="Estructura para recorrer el portafolio según jerarquía, relaciones y audiencia."
              href="/estructura-de-navegacion"
            />
          </div>
        </PageSection>

        <PageSection title={<h2>Sistema de construcción</h2>}>
          <p className="text-sm/8 text-gray-600 dark:text-gray-400">
            Recursos para pasar de decisiones conceptuales a implementación sin
            perder claridad ni mantenibilidad.
          </p>
          <div className="@container">
            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 @2xl:grid-cols-2">
              <ContentLink
                type="tool"
                title="Especificación"
                description="Instrucciones precisas para construir con IA sin delegar criterio ni dirección creativa."
                href="/especificacion"
              />
              <ContentLink
                type="tool"
                title="Estructura del proyecto"
                description="Organización de archivos que separa contenido, presentación, comportamiento y documentación."
                href="/estructura-del-proyecto"
              />
              <ContentLink
                type="tool"
                title="HTML semántico"
                description="Marcado claro para representar la arquitectura de información del portafolio."
                href="/html-semantico"
              />
              <ContentLink
                type="tool"
                title="Sistema visual en CSS"
                description="Reglas reutilizables de tipografía, color, espaciado y componentes."
                href="/sistema-visual-css"
              />
            </div>
          </div>
        </PageSection>

        <PageSection title={<h2>Revisión final</h2>}>
          <p className="text-sm/8 text-gray-600 dark:text-gray-400">
            Puntos de control para publicar con una base funcional y poder
            evolucionar el portafolio después del curso.
          </p>
          <div className="mt-8 max-w-2xl space-y-6">
            <ContentLink
              type="article"
              title="Optimización"
              description="Revisión de rendimiento, accesibilidad, responsive, enlaces, imágenes y metadatos."
              href="/optimizacion"
            />
            <ContentLink
              type="article"
              title="Evolución"
              description="Criterios para actualizar el portafolio como sistema vivo, no como entrega cerrada."
              href="/evolucion"
            />
          </div>
        </PageSection>
      </div>
    </CenteredPageLayout>
  );
}
