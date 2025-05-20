

export const fetchData = async (url : string) => {

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Fetch failed")
        return await res.json();
    } catch (err) {
        console.error("Fetch Error:", err);
        return [];
    }
};