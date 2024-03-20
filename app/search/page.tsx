'use client'

import React, { ButtonHTMLAttributes, useEffect, useMemo, useState } from "react";
import { getCityWeather } from "../(api)/Weather";
import Button from "../(components)/Button";

export default function Page() {
    const [cityData, setCityData] = useState("");
    const [cityName, setCityName] = useState("");

    useEffect(() => {
        console.log(cityName);
    }, [cityName])
    const searchedCity = useMemo(() => {
        return <section></section>
    }, [cityData])

    const searchCity = async (city: string) => {
        try {
            fetch(`http://api.weatherapi.com/v1/current.json?key=3b67834381c14eb3b2d222433231107&q=${city}`)
            .then(res => {
                let weather = res.json();
                console.log(weather)
                return weather;
            })
            .then(res => console.log(res.location.name))
            .catch(e =>  console.log(e));
        } catch (e) {
            console.error(e);
        } finally {
            setCityName("");
        }
        
    }

    const handleKeyDown = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCityName(e.target.value);
    }

    return (
        <main className="grid w-full grid-flow-row grid-cols-6 items-center justify-center gap-8 md:grid-cols-12 mt-10">
            <section className="col-span-full flex gap-1 justify-center">
            <input onChange={handleKeyDown} value={cityName} type="text" id="searchInput" className={`w-[50%] px-4 py-2`} placeholder={"Write the name city"}/>
            <Button className={''} onClick={() => searchCity(cityName)}>Search</Button>
            </section>
            {searchedCity}
        </main>
    );
}