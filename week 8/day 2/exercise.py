class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is walking'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    pass


bengal_cat = Bengal('Bengal', 3)
chartreux_cat = Chartreux('Chartreux', 4)
siamese_cat = Siamese('Siamese', 2)


all_cats = [bengal_cat, chartreux_cat, siamese_cat]


sara_pets = Pets(all_cats)


sara_pets.walk()


class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        self_score = self.run_speed() * self.weight
        other_score = other_dog.run_speed() * other_dog.weight
        if self_score > other_score:
            return f"{self.name} won the fight!"
        elif self_score < other_score:
            return f"{other_dog.name} won the fight!"
        else:
            return "It's a tie!"

dog1 = Dog("Fido", 3, 15)
dog2 = Dog("Rex", 5, 25)
dog3 = Dog("Buddy", 2, 10)

print(dog1.bark())
print(dog2.run_speed())
print(dog3.fight(dog1))

import random


class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        bark_output = self.bark()
        print(bark_output)
        self.trained = True

    def play(self, *other_dogs):
        dog_names = [dog.name for dog in other_dogs]
        dog_names.append(self.name)
        print(f"{', '.join(dog_names)} all play together.")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained yet.")


my_pet = PetDog("Buddy", 4, 25)

print(my_pet.bark())
# Output: "Buddy is barking"

print(my_pet.run_speed())
# Output: 62.5

my_pet.train()
# Output: "Buddy is barking"

my_pet.play(Dog("Rufus", 3, 20), Dog("Fido", 2, 15))
# Output: "Buddy, Rufus, Fido all play together."

my_pet.do_a_trick()
# Output: "Buddy plays dead"










