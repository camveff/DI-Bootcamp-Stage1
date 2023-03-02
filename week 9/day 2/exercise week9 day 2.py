class Human:
    def __init__(self, name, age, living_place=None):
        self.name = name
        self.age = age
        self.living_place = living_place

    def move(self, building):
        if self.living_place is not None:
            self.living_place.inhabitants.remove(self)
        self.living_place = building
        building.inhabitants.append(self)


class Building:
    def __init__(self, address, inhabitants=[]):
        self.address = address
        self.inhabitants = inhabitants


class City:
    def __init__(self, name, buildings=[]):
        self.name = name
        self.buildings = buildings

    def construct(self, address):
        building = Building(address)
        self.buildings.append(building)
        return building

    def info(self):
        num_buildings = len(self.buildings)
        if num_buildings == 0:
            print(f"{self.name} has no buildings yet.")
            return
        total_age = 0
        total_pop = 0
        for building in self.buildings:
            total_pop += len(building.inhabitants)
            for inhabitant in building.inhabitants:
                total_age += inhabitant.age
        mean_age = total_age / total_pop
        print(f"{self.name} has {num_buildings} buildings and a mean age of {mean_age:.1f}.")



city = City("New York")
building1 = city.construct("123 Main St")
building2 = city.construct("456 Park Ave")
person1 = Human("Alice", 25)
person2 = Human("Bob", 35)
person1.move(building1)
person2.move(building2)


city.info()
