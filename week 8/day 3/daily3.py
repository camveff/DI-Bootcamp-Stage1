# 1 class?
# In Python, a class is a blueprint or a template that defines a type of object.
# It contains attributes and methods that define the behavior and properties of the objects that are created from it.

# 2 In Python, an instance is an individual object that is created from a class.
# It has its own set of properties and methods that are defined by the class,
# but may be unique to that instance.

# 3 Encapsulation in Python refers to the practice of hiding the internal details of an object from the outside world,
# and only exposing a public interface for interacting with it.
# This is typically achieved through the use of access modifiers like private, protected, and public.

# 4 Abstraction in Python is the process of focusing on the essential features of an object or system,
# while ignoring the implementation details.
# It involves creating abstract classes or interfaces that define the behavior and properties of objects,
# without specifying how they are implemented.

# 5 Inheritance in Python is the mechanism by which one class can inherit properties and methods from another class.
# It allows for code reuse and can simplify the creation of new classes that are similar to existing ones.

# 6 Multiple inheritance is the ability of a class to inherit properties and methods from multiple parent classes.
# It allows for greater flexibility in creating new classes that combine the features of multiple existing classes.

# 7 Polymorphism is the ability of different objects to be used interchangeably.
# It allows for more flexible and reusable code, as well as simpler and more generic algorithms.

# 8 MRO order in which Python looks for methods and attributes in a class hierarchy.
# It determines which method or attribute is used,
# when a method or attribute of the same name is defined in multiple classes in the hierarchy.




import random


class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __str__(self):
        return f"{self.value} of {self.suit}"


class Deck:
    def __init__(self):
        self.cards = []
        self.create_deck()

    def create_deck(self):
        suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        for suit in suits:
            for value in values:
                card = Card(suit, value)
                self.cards.append(card)

    def shuffle(self):
        random.shuffle(self.cards)

    def deal(self):
        if len(self.cards) == 0:
            return None
        return self.cards.pop()



deck = Deck()

deck.shuffle()

card = deck.deal()

if card:
    print(card)
else:
    print("No more cards in the deck!")