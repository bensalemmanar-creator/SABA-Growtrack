// Weather Service - Mock implementation with realistic data
// In production, replace with actual API calls to OpenWeatherMap or similar

export interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  rainfall: number;
  windSpeed: number;
  forecast: {
    day: string;
    temp: number;
    condition: string;
    rainChance: number;
  }[];
  alerts: {
    type: string;
    message: string;
    severity: 'low' | 'medium' | 'high';
  }[];
}

// Mock weather data generator
const generateMockWeather = (): WeatherData => {
  const conditions = ['Sunny', 'Partly Cloudy', 'Cloudy', 'Rainy', 'Clear'];
  const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
  
  const forecast = [
    { day: 'Today', temp: 28, condition: 'Sunny', rainChance: 10 },
    { day: 'Tomorrow', temp: 32, condition: 'Partly Cloudy', rainChance: 20 },
    { day: 'Wed', temp: 30, condition: 'Cloudy', rainChance: 60 },
    { day: 'Thu', temp: 27, condition: 'Rainy', rainChance: 80 },
    { day: 'Fri', temp: 29, condition: 'Partly Cloudy', rainChance: 30 },
  ];

  const alerts = [];
  
  // Check for high temperature alert
  if (forecast[1].temp > 30) {
    alerts.push({
      type: 'Temperature Alert',
      message: `High temperature expected tomorrow (${forecast[1].temp}°C). Consider increasing irrigation.`,
      severity: 'medium' as const,
    });
  }

  // Check for rain alert
  if (forecast.some(f => f.rainChance > 70)) {
    alerts.push({
      type: 'Rainfall Alert',
      message: 'Heavy rain expected in 2 days. Check drainage systems.',
      severity: 'high' as const,
    });
  }

  return {
    temperature: 28,
    condition: randomCondition,
    humidity: 65,
    rainfall: 45,
    windSpeed: 12,
    forecast,
    alerts,
  };
};

// Simulate API call with delay
export const fetchWeatherData = async (location?: string): Promise<WeatherData> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // In production, you would call:
  // const API_KEY = 'YOUR_API_KEY_HERE';
  // const response = await fetch(
  //   `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
  // );
  // return response.json();
  
  return generateMockWeather();
};

// Get weather icon based on condition
export const getWeatherIcon = (condition: string): string => {
  const iconMap: { [key: string]: string } = {
    'Sunny': '☀️',
    'Clear': '☀️',
    'Partly Cloudy': '⛅',
    'Cloudy': '☁️',
    'Rainy': '🌧️',
    'Thunderstorm': '⛈️',
  };
  return iconMap[condition] || '🌤️';
};
