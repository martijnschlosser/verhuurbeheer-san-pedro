import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Verhuurbeheer San Pedro de Alcántara",
    short_name: "VBE San Pedro de Alcántara",
    description: "Fullservice verhuurbeheer en vastgoedbeheer in San Pedro de Alcántara, Nueva Andalucía en Marbella.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#071d3a",
    lang: "nl",
    icons: [{ src: "/vbs-logo-san-pedro.png", sizes: "1254x1254", type: "image/png" }],
  };
}
