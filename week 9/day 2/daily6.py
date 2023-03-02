class Person:
    def __init__(self, name, likes=[], hates=[]):
        self.name = name
        self.likes = likes
        self.hates = hates

    def taste(self, food_name):
        if food_name in self.likes:
            return f"{self.name} eats the {food_name} and loves it!"
        elif food_name in self.hates:
            return f"{self.name} eats the {food_name} and hates it!"
        else:
            return f"{self.name} eats the {food_name}!"

person1 = Person("Alice", likes=["pizza", "sushi"], hates=["mushrooms"])
person2 = Person("Bob", likes=["chocolate", "ice cream"])

print(person1.taste("sushi"))
print(person1.taste("mushrooms"))
print(person1.taste("burger"))
print(person2.taste("chocolate"))
print(person2.taste("broccoli"))
