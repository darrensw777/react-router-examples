import { useSearchParams } from "react-router";

function Singing() {
    const [searchParams, setSearchParams] = useSearchParams();

    const category = searchParams.get("category") ?? "all";

    function showSinging() {
        setSearchParams((previous) => {
            const next = new URLSearchParams(previous);
            next.set("category", "singing");
            return next;
        });
    }

    return (
        <>
            <p>Category: {category}</p>
            <p className="my-4">
                Clicking the button below will add a url parameter. What we'll
                then do is read that parameter and set the category to
                "singing", as you'll see above
            </p>
            <button
                onClick={showSinging}
                className="border mt-8 p-4 hover:bg-red-600 hover:text-white"
            >
                Show singing
            </button>
        </>
    );
}

export default Singing;
