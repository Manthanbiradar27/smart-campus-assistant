export interface CampusMessage {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  category?: string;
}

export interface CampusService {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export interface CampusInfo {
  schedules: {
    library: string;
    dining: string;
    gym: string;
    shuttle: string;
  };
  facilities: {
    library: string;
    gym: string;
    labs: string;
    parking: string;
  };
  dining: {
    mainHall: string;
    cafe: string;
    foodTrucks: string;
  };
  administrative: {
    registrar: string;
    financial: string;
    counseling: string;
    career: string;
  };
}