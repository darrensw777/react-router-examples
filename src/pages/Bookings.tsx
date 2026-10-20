import { useNavigate } from "react-router";

async function saveBooking() {
    // Your own API function
    console.log("Booking saved");
}

function BookingButton() {
    const navigate = useNavigate();

    async function handleBooking() {
        await saveBooking(); // Your own API function
        navigate("/thank-you");
    }

    return (
        <button
            onClick={handleBooking}
            className="border mt-8 p-4 hover:bg-red-600 hover:text-white"
        >
            Book session
        </button>
    );
}

const Bookings = () => {
    return (
        <>
            <div>Bookings</div>
            <p>
                The button below is used to firstly save the booking, then route
                on success.
            </p>
            <BookingButton />
        </>
    );
};

export default Bookings;
