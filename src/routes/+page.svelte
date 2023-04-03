<script>
    import { countries } from "@/store/countries.js";
    import { onMount } from "svelte";

    let promise = $countries;

    onMount(async () => {
        promise = await $countries;
        console.log(promise);
    });
</script>
