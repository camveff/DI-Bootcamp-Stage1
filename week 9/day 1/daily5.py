class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
            self.diameter = radius * 2
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be specified.")

    def get_radius(self):
        return self.radius

    def get_diameter(self):
        return self.diameter

c1 = Circle(radius=5)
print(c1.get_radius())
print(c1.get_diameter())

c2 = Circle(diameter=6)
print(c2.get_radius())
print(c2.get_diameter())