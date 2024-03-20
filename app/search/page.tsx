'use client'

import React, {ButtonHTMLAttributes, useEffect, useMemo, useState} from "react";
import Button from "../(components)/Button";

type CityData = {
    name?: string;
};

export default function Page() {

    const [cityData, setCityData] = useState({
        name: "",
        country: "",
        localTime: "",
        temperatureC: 0,
        sensationC: 0,
    });
    const [cityName, setCityName] = useState("");

    useEffect(() => {
        console.table(cityData)
    }, [cityData])

    const searchedCity = useMemo(() => {
        if (cityData.name != "" && cityData) {
            return <section className={`col-span-full m-auto min-w-[352px] py-4 bg-gray-100 flex flex-col gap-1`}>
                <div className={"flex gap-2 justify-center"}>
                    <h3 className={"text-xl"}>{cityData?.name}</h3>
                    |
                    <h3 className={"text-xl"}>{cityData?.country}</h3>
                </div>
                <p className={"text-[#555] text-center"}>{cityData?.localTime}</p>
                <div className={"mt-4 flex flex-col items-center"}>
                    <h3 className={"text-lg"}>Temperature data</h3>
                    <div className={"mt-2 flex flex-row gap-1"}>
                        <p>Temperature: {cityData?.temperatureC} ºC</p>
                        |
                        <p>Feels-like: {cityData?.sensationC} °C</p>
                    </div>
                </div>
            </section>
        }

        return <section className={`col-span-full m-auto`}>
            <p>The data of the searched city will be showed here!</p>
        </section>
    }, [cityData])


    const searchCity = async (city: string) => {
        try {
            fetch(`http://api.weatherapi.com/v1/current.json?key=3b67834381c14eb3b2d222433231107&q=${city}`)
                .then(res => {
                    let weather = res.json();
                    console.log(weather)
                    return weather;
                })
                .then(res => {
                    setCityData({
                        name: res.location.name,
                        country: res.location.country,
                        localTime: res.location.localtime,
                        temperatureC: res.current.temp_c,
                        sensationC: res.current.feelslike_c,
                    })
                })
                .catch(e => console.log(e));
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
                <input onChange={handleKeyDown} value={cityName} type="text" id="searchInput"
                       className={`w-[50%] px-4 py-2`} placeholder={"Write the name city"}/>
                <Button className={''} onClick={() => searchCity(cityName)}>Search</Button>
            </section>
            {searchedCity}
        </main>
    );
}