import { config } from "dotenv";

config();


//create a object for all the env files
export const appConfig={
    mongoConnection:getOsEnv('DB_URL'),
    port:getOsEnv('PORT'),
    key_Id:getOsEnv('RAZEREPAY_API_KEY'),
    key_secret:getOsEnv('RAZEREPAY_API_SECRET'),

}


//create a function for  handel error for all the env files..
export function getOsEnv(key:string) :string{
if(typeof process.env[key]==="undefined"){
    throw Error (`Environmental variable ${key} is not define`)
}

return process.env[key] ?? '';
}