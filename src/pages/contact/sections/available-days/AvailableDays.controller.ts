export default function useAvailableDaysController() {
    const workingDays = [
        { day: "Mon", from: "9:00", to: "18:00" },
        { day: "Tue", from: "9:00", to: "18:00" },
        { day: "Wed", from: "9:00", to: "18:00" },
        { day: "Thu", from: "9:00", to: "18:00" },
        { day: "Fri", from: "9:00", to: "18:00" },
        { day: "Sat", from: "9:00", to: "18:00" },
        { day: "Sun", from: "9:00", to: "18:00" },
    ];
    return { workingDays };
}
