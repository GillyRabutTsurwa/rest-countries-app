export async function load(context) {
    const { params, fetch, url } = context;
    console.log(params);
    console.log(params.id);

    console.log(url);
    const id = params.id;

    const URL = `https://restcountries.com/v3.1/name/${id.toLowerCase()}`;
    try {
        const response = await fetch(URL, {
            headers: {
                Accept: "application/json",
            },
        });

        if (!response.ok) throw new Error("Can't fetch Countries");
        console.log(response);
        const countryInfo = await response.json();
        console.log(countryInfo);
        return {
            props: {
                id: id,
                countryInfo: countryInfo,
            },
        };
    } catch (error) {
        console.log(error);
    }
}
