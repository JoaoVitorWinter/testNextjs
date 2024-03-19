'use server'
export async function getCityWeather(city: string) {
    try {
        
        const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=3b67834381c14eb3b2d222433231107&q=${city}`);
        console.log(res.json());
        return res.json();
    } catch (e) {
        console.error(e);
    }

}