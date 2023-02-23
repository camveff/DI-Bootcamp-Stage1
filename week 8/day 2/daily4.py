class Pagination:
    def __init__(self, items=None, pageSize=10):
        self.items = items or []
        self.pageSize = int(pageSize)
        self.totalPages = (len(self.items) + self.pageSize - 1) // self.pageSize
        self.currentPage = 1

    def getVisibleItems(self):
        startIndex = (self.currentPage - 1) * self.pageSize
        endIndex = startIndex + self.pageSize
        return self.items[startIndex:endIndex]

    def prevPage(self):
        if self.currentPage > 1:
            self.currentPage -= 1
        return self

    def nextPage(self):
        if self.currentPage < self.totalPages:
            self.currentPage += 1
        return self

    def firstPage(self):
        self.currentPage = 1
        return self

    def lastPage(self):
        self.currentPage = self.totalPages
        return self

    def goToPage(self, pageNum):
        pageNum = int(pageNum)
        if pageNum <= 0:
            self.currentPage = 1
        elif pageNum > self.totalPages:
            self.currentPage = self.totalPages
        else:
            self.currentPage = pageNum
        return self

alphabetList = "abcdefghijklmnopqrstuvwxyz".split(' ')
p = Pagination(alphabetList, 4)

print(p.getVisibleItems())

p.nextPage().nextPage()

print(p.getVisibleItems())

p.goToPage(3)

print(p.getVisibleItems())


