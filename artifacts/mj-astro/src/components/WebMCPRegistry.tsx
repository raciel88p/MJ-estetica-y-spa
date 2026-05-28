import { useEffect } from "react";
import { servicePages } from "@/data/services";

export function WebMCPRegistry() {
  useEffect(() => {
    // @ts-ignore
    if (typeof window !== "undefined" && "navigator" in window && "modelContext" in window.navigator) {
      const controller = new AbortController();

      const listServicesTool = {
        name: "listar-servicios",
        description: "Lista todos los servicios y tratamientos disponibles en MJ Estética.",
        inputSchema: {
          type: "object",
          properties: {},
          required: []
        },
        execute: () => {
          const servicesList = servicePages
            .map(s => `- ${s.name} (slug: ${s.slug})`)
            .join('\n');

          return {
            content: [{
              type: "text",
              text: `MJ Estética ofrece los siguientes servicios:\n\n${servicesList}\n\nPuedes pedir detalles sobre cualquiera de ellos usando su nombre.`
            }]
          };
        }
      };

      const searchTreatmentsTool = {
        name: "buscar-tratamientos",
        description: "Busca tratamientos específicos basados en palabras clave o necesidades del usuario.",
        inputSchema: {
          type: "object",
          properties: {
            keyword: {
              type: "string",
              description: "Palabra clave para buscar (ej: 'facial', 'masaje', 'laser')."
            }
          },
          required: ["keyword"]
        },
        execute: ({ keyword }: { keyword: string }) => {
          const results = servicePages.filter(s =>
            s.name.toLowerCase().includes(keyword.toLowerCase()) ||
            s.heroDescription.toLowerCase().includes(keyword.toLowerCase()) ||
            s.tagline.toLowerCase().includes(keyword.toLowerCase())
          );

          if (results.length === 0) {
            return {
              content: [{
                type: "text",
                text: `No se encontraron tratamientos que coincidan con "${keyword}". ¿Te gustaría ver la lista completa de servicios?`
              }]
            };
          }

          const resultsText = results
            .map(s => `- ${s.name}: ${s.tagline}`)
            .join('\n');

          return {
            content: [{
              type: "text",
              text: `Encontré los siguientes tratamientos para "${keyword}":\n\n${resultsText}`
            }]
          };
        }
      };

      try {
        // @ts-ignore
        window.navigator.modelContext.registerTool(listServicesTool, { signal: controller.signal });
        // @ts-ignore
        window.navigator.modelContext.registerTool(searchTreatmentsTool, { signal: controller.signal });
      } catch (e) {
        console.warn("Global WebMCP tools registration failed", e);
      }

      return () => controller.abort();
    }
  }, []);

  return null;
}
