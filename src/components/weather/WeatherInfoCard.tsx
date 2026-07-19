type WeatherInfoCardProps = {
    icon: string;
    title: string;
    value: string;
};

function WeatherInfoCard({
    icon,
    title,
    value,
}: WeatherInfoCardProps) {
    return (
        <div className="rounded-2xl bg-white p-6 shadow-md">
            <div className="text-3xl">{icon}</div>

            <p className="mt-3 text-gray-500">
                {title}
            </p>

            <p className="mt-2 text-2xl font-semibold">
                {value}
            </p>
        </div>
    );
}

export default WeatherInfoCard;