
class Game:
    def play(self):
        # Code for playing the game
        # Returns the result of the game as a string: 'win', 'loss', or 'draw'
        pass

def get_user_menu_choice():
    while True:
        print("Please choose one of the following options:")
        print("1. Play a new game")
        print("2. Show scores")
        print("3. Quit")
        choice = input("Enter your choice (1-3): ")
        if choice == '1':
            return 'play'
        elif choice == '2': # the elif is redundant because one line before we are doing return so change it to if
            return 'scores'
        elif choice == '3': # the elif is redundant because one line before we are doing return so change it to if
            return 'quit'
        else:
            print("Invalid choice. Please try again.")

def print_results(results):
    print("Thank you for playing! Here are your results:")
    print("Wins: {}".format(results['win']))
    print("Losses: {}".format(results['loss']))
    print("Draws: {}".format(results['draw']))

def main():
    results = {'win': 0, 'loss': 0, 'draw': 0}
    while True:
        choice = get_user_menu_choice()
        if choice == 'play':
            game = Game()
            result = game.play()
            if result == 'win':
                results['win'] += 1
            elif result == 'loss':
                results['loss'] += 1
            elif result == 'draw':
                results['draw'] += 1
        elif choice == 'scores':
            print_results(results)
        elif choice == 'quit':
            print_results(results)
            break

