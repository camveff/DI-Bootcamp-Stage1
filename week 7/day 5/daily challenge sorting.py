user_input = input("Enter comma separated sequence of words: ")

words = [word.strip() for word in user_input.split(",")]

sorted_words = sorted(words)

output = ",".join(sorted_words)

print(output)

