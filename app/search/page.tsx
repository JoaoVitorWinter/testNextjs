'use client'

import { useMemo, useState } from "react";
import { getCityWeather } from "../(api)/Weather";
import Button from "../(components)/Button";

export default function Page() {
    const [cityData, setCityData] = useState();

    const searchedCity = useMemo(() => {
        return <section></section>
    }, [cityData])

    const searchCity = async (city: string) => {
        await getCityWeather(city);
        
    }
    return (
        <main className="grid w-full grid-flow-row grid-cols-6 items-center justify-center gap-8 md:grid-cols-12">
            <input type="text" id="searchInput" className={`col-start-4 col-end-9 px-4 py-2 mt-10`} placeholder={"Write the name city"}/>
            <button onClick={() => searchCity("London")}>click</button>
            {searchedCity}
        </main>
    );
}