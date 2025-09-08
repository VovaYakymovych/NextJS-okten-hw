
export const GET = async () => {
    const cars = await fetch("http://owu.linkpc.net/carsAPI/v1/cars").then(value => value.json())
    return new Response(JSON.stringify(cars), {status: 200});
}