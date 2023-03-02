class Door:
    objs = 0

    def __init__(self, locked=True):
        self.id = Door.objs
        Door.objs += 1
        self.locked = locked
        self.next = []

    def can_go_to(self, other_door):
        if self == other_door:
            return True
        visited = set()
        queue = [self]
        while queue:
            current = queue.pop(0)
            if current == other_door:
                return True
            if current.locked or current in visited:
                continue
            visited.add(current)
            queue.extend(current.next)
        return False


d0 = Door(locked=False)
d1 = Door()
d2 = Door()
d3 = Door()


d0.next = [d1]
d1.next = [d2]
d2.next = [d3]


print(d0.can_go_to(d3))  
d2.locked = True
print(d0.can_go_to(d3))



