import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Spatial Quest API",
      version: "1.0.0",
      description: "API documentation for Spatial Quest backend",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["src/routes/*.js", "src/controllers/*.js"],
};

export const swaggerSpec = swaggerJsdoc(options);
