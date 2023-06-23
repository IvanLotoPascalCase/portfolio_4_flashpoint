// IMPORTS
import dotenv from 'dotenv'

// CONFIG DOTENV - VARIABLES DE ENTORNO
dotenv.config();

// VARIABLES Y ASIGNACIONES - ALSO VALORES POR DEFECTO.
export const PORT = process.env.FP_API_PORT || 3000;
export const HOST = process.env.FP_API_HOST || 'http://localhost:';
