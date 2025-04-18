const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf, colorize } = format;

// Define log format
const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

// Create the logger instance
const logger = createLogger({
    // Default log level
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        logFormat
    ),
    transports: [
        new transports.Console({ format: combine(colorize(), logFormat) }), // Console output

        
        new transports.File({
            filename: "logs/server.log",  
            maxsize: 10 * 1024 * 1024, 
            maxFiles: 1 
        }),

        // Separate file for error logs (same settings)
        new transports.File({
            filename: "logs/error.log",
            level: "error",
            maxsize: 10 * 1024 * 1024,
            maxFiles: 1
        }),
    ],
});

module.exports = logger;