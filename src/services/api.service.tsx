import {SearchParams} from "next/dist/server/request/search-params";


export async function getApiData<T>(endpoint: string): Promise<T> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
    return res.json() as Promise<T>;
}

export async function retrieveSearchParams<T>(searchParams: Promise<SearchParams>, key: string): Promise<T | null> {
    const params = await searchParams;
    const value = params[key];

    if (typeof value === "string") {
        return JSON.parse(value) as T;
    }
    else {
        console.log(`Key "${key}" not found in search params or is not a string.`);
        return null
    }
}