class Character:
    def __init__(self, name):
        self.name = name
        self.life = 20
        self.attack = 10

    def basic_attack(self, other_char):
        other_char.life -= self.attack

class Druid(Character):
    def __init__(self, name):
        super().__init__(name)
        print("I am a Druid and I protect nature!")

    def meditate(self):
        self.life += 10
        self.attack -= 2

    def animal_help(self):
        self.attack += 5

    def fight(self, other_char):
        damage = 0.75*self.life + 0.75*self.attack
        other_char.life -= damage

class Warrior(Character):
    def __init__(self, name):
        super().__init__(name)
        print("I am a Warrior and I fear no enemy!")

    def brawl(self, other_char):
        other_char.life -= 2*self.attack
        self.life += 0.5*self.attack

    def train(self):
        self.attack += 2
        self.life += 2

    def roar(self, other_char):
        other_char.attack -= 3

class Mage(Character):
    def __init__(self, name):
        super().__init__(name)
        print("I am a Mage and I command the elements!")

    def curse(self, other_char):
        other_char.attack -= 2

    def summon(self):
        self.attack += 3

    def cast_spell(self, other_char):
        damage = int(self.attack/5) + int(self.life/5)
        other_char.life -= damage


druid = Druid("Elwynn")
druid.meditate()
print(f"{druid.name}'s life: {druid.life}, attack: {druid.attack}")
druid.animal_help()
print(f"{druid.name}'s life: {druid.life}, attack: {druid.attack}")
other_char = Character("Orc")
druid.fight(other_char)
print(f"{other_char.name}'s life: {other_char.life}")  # output: "Orc's life: 4"


warrior = Warrior("Grommash")
warrior.brawl(other_char)
print(f"{other_char.name}'s life: {other_char.life}, {warrior.name}'s life: {warrior.life}")
warrior.train()
print(f"{warrior.name}'s life: {warrior.life}, attack: {warrior.attack}")
warrior.roar(other_char)
print(f"{other_char.name}'s attack: {other_char.attack}")


mage = Mage("Jaina")
mage.curse(other_char)
print(f"{other_char.name}'s attack: {other_char.attack}")
mage.summon()
print(f"{mage.name}'s attack: {mage.attack}")