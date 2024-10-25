import path from "path";
import moment from "moment-timezone";
import winston from "winston";
//set the Logging Directory Path
const thisDir = __dirname;
const srcDirectory = path.resolve(thisDir, "..");
const logDirectory = path.resolve(srcDirectory, "logging");

//Set the Time zone and format
const timeZone = "Asia/Kolkatta";
const timeFormat = winston.format.printf(({ timestamp, level, message }) => {
    return `${timestamp} [${level}: ${message}]`
})

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({ format: () => moment().tz(timeZone).format() }), timeFormat
    ),
    transports: [
        new winston.transports.Console({ level: "debug" }),
        new winston.transports.File({
            filename: path.join(logDirectory, "test.log"),
            maxsize: 10 * 1024,
            maxFiles: 4,
            level: "info"
        }),
        new winston.transports.File({
            filename: path.join(logDirectory, "test_error.log"),
            maxsize: 30 * 1024,
            maxFiles: 5,
            level: "error"
        })
    ]
});

export default logger;