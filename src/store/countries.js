import { writable } from "svelte/store";

let x = (async () => {
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
        // @ts-ignore
        const { message } = error;
        console.log(message);
    }
})();

export const countries = writable([], (set) => {
    // @ts-ignore
    set(x);
});
