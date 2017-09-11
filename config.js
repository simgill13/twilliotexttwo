exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://sim:cobra@ds161713.mlab.com:61713/barapp';
                       
exports.PORT = process.env.PORT || 8080;
exports.ACCOUNT_SID = process.env.ACCOUNT_SID || 'AC930c602a19415f6adcfd5ea6b65e0aa1';
exports.AUTH_TOKEN = process.env.AUTH_TOKEN || 'b746baf812b466659e94d45e638836f3'