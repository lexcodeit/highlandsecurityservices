import dayjs from "dayjs";

export const avatarFallback = (value?: string) => {
    return value?.charAt(0).toUpperCase();
};

export function formatTimeFn(date: string | number, format?: string) {
    const dayjsDate = dayjs(date);
    return dayjsDate.format(format || "MMM DD, hh:mm a");
}
