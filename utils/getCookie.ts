"use server";

let getCookie: (key: string) => string | undefined = () => "";
const { cookies } = require("next/headers");
getCookie = (key: string) => cookies()?.get(key)?.value;
export { getCookie };