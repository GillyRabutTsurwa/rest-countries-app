import { readable } from "svelte/store";

let pays = (async () => {
    const URL = "https://restcountries.com/v3.1/all";
    try {
        const response = await fetch(URL, {
            headers: {
                Accept: "application/json",
            },
        });

        if (!response.ok) throw new Error("Can't fetch Countries");
        console.log(response);
        const countriesArr = await response.json();
        return countriesArr;
    } catch (error) {
        console.log(error);
    }
})();

export const countries = readable([], (set) => {
    // @ts-ignore
    set(pays);
});
