let baseFunctionUrl;

const env = process.env.NODE_ENV || "DEV"

if (env === "DEV"){
    baseFunctionUrl = '""';
} else {
    baseFunctionUrl = '"https://qcxcs8u6d7.execute-api.us-east-1.amazonaws.com/dev"';
}

const config = {
    BASE_FUNCTION_URL: baseFunctionUrl,
};

module.exports = config;
