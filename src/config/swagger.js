import swaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "OpenLK API",
            version: "1.0.0",
            description: "API for Sri Lankan public data"
        },
        servers: [
            {
                url: "http://localhost:5000"
            }
        ]
    },
    apis: ["./src/routes/*.js"]
};

export const swaggerSpec = swaggerJsdoc(options);