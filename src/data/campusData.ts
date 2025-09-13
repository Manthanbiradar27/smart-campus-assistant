import { CampusInfo, CampusService } from "@/types/campus";

export const campusServices: CampusService[] = [
  {
    id: "schedules",
    name: "Schedules",
    icon: "📅",
    description: "Class schedules, library hours, dining times",
    color: "bg-gradient-primary"
  },
  {
    id: "facilities",
    name: "Facilities", 
    icon: "🏢",
    description: "Campus buildings, labs, study spaces",
    color: "bg-gradient-campus"
  },
  {
    id: "dining",
    name: "Dining",
    icon: "🍽️", 
    description: "Meal plans, menus, dining locations",
    color: "bg-secondary"
  },
  {
    id: "library",
    name: "Library",
    icon: "📚",
    description: "Books, research, study rooms, printing",
    color: "bg-accent"
  },
  {
    id: "administrative",
    name: "Admin",
    icon: "📋",
    description: "Registration, financial aid, counseling",
    color: "bg-primary-glow"
  },
  {
    id: "emergency",
    name: "Emergency",
    icon: "🚨",
    description: "Campus safety, emergency contacts",
    color: "bg-destructive"
  }
];

export const campusInfo: CampusInfo = {
  schedules: {
    library: "Mon-Thu: 7:00 AM - 12:00 AM, Fri: 7:00 AM - 8:00 PM, Sat: 9:00 AM - 8:00 PM, Sun: 11:00 AM - 12:00 AM",
    dining: "Breakfast: 7:00-10:00 AM, Lunch: 11:00 AM - 3:00 PM, Dinner: 5:00-9:00 PM",
    gym: "Mon-Fri: 5:00 AM - 11:00 PM, Sat-Sun: 7:00 AM - 10:00 PM",
    shuttle: "Every 15 minutes from 7:00 AM - 10:00 PM, limited weekend service"
  },
  facilities: {
    library: "Main Library (5 floors), Science Library, Law Library. All with study rooms, computers, and printing services.",
    gym: "Fitness Center with cardio, weights, basketball courts, swimming pool, and group fitness classes.",
    labs: "Computer Labs in Tech Building (24/7), Science Labs in Morrison Hall, Engineering Labs in Rogers Center.",
    parking: "Student Lot A (free), Visitor Parking ($5/day), Faculty Lot B (permit required)"
  },
  dining: {
    mainHall: "All-you-can-eat dining with international cuisine, salad bar, grill, and dessert station. Meal plans accepted.",
    cafe: "Starbucks, sandwiches, pastries, and grab-n-go items. Located in Student Union. Cash and dining dollars accepted.",
    foodTrucks: "Rotating food trucks Monday-Friday 11 AM - 2 PM near the Quad. Taco Tuesday, Pizza Wednesday!"
  },
  administrative: {
    registrar: "Course registration, transcripts, graduation requirements. Located in Admin Building Room 101. Hours: 8 AM - 5 PM.",
    financial: "Financial aid, scholarships, payment plans, student accounts. Admin Building Room 203. Walk-ins welcome 9-4 PM.",
    counseling: "Free counseling services, mental health support, crisis intervention. Health Center 2nd floor. Confidential.",
    career: "Job search, internships, resume help, career fairs. Career Center in Student Union. Schedule appointments online."
  }
};

export const quickResponses = {
  schedules: [
    "What are the library hours?",
    "When does the dining hall close?", 
    "Gym operating hours?",
    "Shuttle bus schedule?"
  ],
  facilities: [
    "Where is the computer lab?",
    "How do I reserve a study room?",
    "Parking information",
    "Campus map locations"
  ],
  dining: [
    "Today's menu",
    "Meal plan options", 
    "Food truck schedule",
    "Dietary restrictions"
  ],
  library: [
    "How to check out books?",
    "Printing services",
    "Research help",
    "Late fees"
  ],
  administrative: [
    "How to register for classes?",
    "Financial aid deadlines",
    "Transcript requests",
    "Counseling appointments"
  ],
  emergency: [
    "Campus emergency number",
    "Safety escort service",
    "Report an incident", 
    "Emergency procedures"
  ]
};