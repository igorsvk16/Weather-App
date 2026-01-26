export function parseWeatherData(data) {
    
    const cc = data?.currentConditions ?? {};
    const today = Array.isArray(data?.days) ? data.days[0] : {};

    return {
        resolvedAddress: data?.resolvedAddress ?? data?.address ?? "Unknown",
        timezone: data?.timezone ?? null,

        temp: cc?.temp ?? null,
        feelslike: cc?.feelslike ?? null,
        humidity: cc?.humidity ?? null,
        windspeed: cc?.windspeed ?? null,
        conditions: cc?.conditions ?? null,
        icon: cc?.icon ?? null,
        datetime: cc?.datetime ?? null,

        tempMax: today?.tempmax ?? null,
        tempMin: today?.tempmin ?? null,
    };
}