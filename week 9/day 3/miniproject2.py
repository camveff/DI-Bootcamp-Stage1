class Human:
    def __init__(self, id_number, name, age, priority, blood_type):
        self.id_number = id_number
        self.name = name
        self.age = age
        self.priority = priority
        self.blood_type = blood_type
        self.family = []

    def add_family_member(self, person):
        if person not in self.family:
            self.family.append(person)
            person.add_family_member(self)


class Queue:
    def __init__(self):
        self.humans = []

    def add_person(self, person):
        if person.priority or person.age >= 60:
            self.humans.insert(0, person)
        else:
            self.humans.append(person)

    def find_in_queue(self, person):
        for i in range(len(self.humans)):
            if self.humans[i] == person:
                return i
        return None

    def swap(self, person1, person2):
        index1 = self.find_in_queue(person1)
        index2 = self.find_in_queue(person2)
        if index1 is not None and index2 is not None:
            self.humans[index1], self.humans[index2] = self.humans[index2], self.humans[index1]

    def get_next(self):
        if self.humans:
            return self.humans.pop(0)
        else:
            return None

    def get_next_blood_type(self, blood_type):
        for i in range(len(self.humans)):
            if self.humans[i].blood_type == blood_type:
                return self.humans.pop(i)
        return None

    def sort_by_age(self):
        def key_func(person):
            if person.priority:
                return (0, person.age)
            elif person.age >= 60:
                return (1, -person.age)
            else:
                return (2, person.age)
        self.humans = sorted(self.humans, key=key_func)

    def rearange_queue(self):
        for i in range(1, len(self.humans)):
            if self.humans[i] in self.humans[i-1].family:
                for j in range(i+1, len(self.humans)):
                    if self.humans[j] not in self.humans[i-1].family:
                        self.swap(self.humans[i], self.humans[j])
                        break


h1 = Human("123", "Alice", 35, True, "A")
h2 = Human("456", "Bob", 65, False, "AB")
h3 = Human("789", "Charlie", 45, False, "O")
h4 = Human("101", "David", 55, True, "B")


h2.add_family_member(h1)
h2.add_family_member(h3)
h4.add_family_member(h1)


q = Queue()
q.add_person(h1)
q.add_person(h2)
q.add_person(h3)
q.add_person(h4)


q.sort_by_age()
q.rearange_queue()


next_human = q.get_next()


o_blood_human = q.get_next_blood_type("O")
