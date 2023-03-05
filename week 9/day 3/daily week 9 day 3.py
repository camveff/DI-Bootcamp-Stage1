from datetime import datetime


class Airline:
    def __init__(self, id, name):
        self.id = id
        self.name = name
        self.planes = []


class Airplane:
    def __init__(self, id, company, current_location):
        self.id = id
        self.company = company
        self.current_location = current_location
        self.next_flights = []

    def fly(self, destination):
        flight = Flight(datetime.today(), self.current_location, destination, self)
        self.next_flights.append(flight)
        self.current_location.planes.remove(self)
        self.current_location = None

    def location_on_date(self, date):
        for flight in self.next_flights:
            if flight.date == date:
                return flight.destination.city
        return self.current_location.city

    def available_on_date(self, date, location):
        if self.current_location != location:
            return False
        for flight in self.next_flights:
            if flight.date == date:
                return False
        return True


class Flight:
    def __init__(self, date, origin, destination, plane):
        self.date = date
        self.origin = origin
        self.destination = destination
        self.plane = plane
        self.id = f"{destination.city}_{plane.company.id}_{date.strftime('%Y-%m-%d')}"

    def take_off(self):
        self.plane.current_location = None

    def land(self):
        self.destination.planes.append(self.plane)
        self.plane.current_location = self.destination


class Airport:
    def __init__(self, city):
        self.city = city
        self.planes = []
        self.scheduled_departures = []
        self.scheduled_arrivals = []

    def schedule_flight(self, destination, date):
        for airline in destination.city_airlines:
            for plane in airline.planes:
                if plane.available_on_date(date, self):
                    flight = Flight(date, self, destination, plane)
                    airline.planes.remove(plane)
                    plane.next_flights.append(flight)
                    self.scheduled_departures.append(flight)
                    destination.scheduled_arrivals.append(flight)
                    return
        print(f"No available planes found for flight to {destination.city} on {date}.")

    def info(self, start_date, end_date):
        print(f"Scheduled flights from {self.city}:\n")
        for flight in self.scheduled_departures:
            if start_date <= flight.date <= end_date:
                print(f"Flight {flight.id} on {flight.date.strftime('%Y-%m-%d')} "
                      f"from {flight.origin.city} to {flight.destination.city}")
        print("\nScheduled flights to {self.city}:\n")
        for flight in self.scheduled_arrivals:
            if start_date <= flight.date <= end_date:
                print(f"Flight {flight.id} on {flight.date.strftime('%Y-%m-%d')} "
                      f"from {flight.origin.city} to {flight.destination.city}")
