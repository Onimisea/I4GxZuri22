import random

gameOptions = ["Rock", "Paper", "Scissors"]

cpu_score = 0
player_score = 0
tie_count = 0


def check_for_winner(player_hand, cpu_hand):
    if player_hand == "Rock" and cpu_hand == "Paper":
        return "cpu"
    elif player_hand == "Rock" and cpu_hand == "Scissors":
        return "player"
    elif player_hand == "Paper" and cpu_hand == "Rock":
        return "player"
    elif player_hand == "Paper" and cpu_hand == "Scissors":
        return "cpu"
    elif player_hand == "Scissors" and cpu_hand == "Rock":
        return "cpu"
    elif player_hand == "Scissors" and cpu_hand == "Paper":
        return "player"
    else:
        return "tie"


print("\n\n\t  Welcome to Rock Paper Scissors game")
print("\n    ------------------------------------------------------")

# Start game loop
while player_score != 3 and cpu_score != 3:
    while True:
        print("\n\t----------------------------------------------")
        player_hand = None
        inp = input("\n\tPick a hand. R, P or S: ")

        # Validate input
        if inp == "R" or inp == "r":
            player_hand = "Rock"
            break
        elif inp == "P" or inp == "p":
            player_hand = "Paper"
            break
        elif inp == "S" or inp == "s":
            player_hand = "Scissors"
            break
        elif inp == "Rock" or inp == "rock":
            player_hand = "Rock"
            break
        elif inp == "Paper" or inp == "paper":
            player_hand = "Paper"
            break
        elif inp == "Scissors" or inp == "scissors":
            player_hand = "Scissors"
            break
        else:
            print("\n\tInvalid input, try again.")

    # Generate cpu hand
    cpu_hand = random.choice(gameOptions)

    # Print results
    print("\n\tYour hand:", player_hand)
    print("\tCPU hand:", cpu_hand)

    result = check_for_winner(player_hand, cpu_hand)

    if result == "player":
        player_score += 1
        print("\n\tCongratulations, you won!")
        print("\tYour Score:", player_score)
    elif result == "cpu":
        cpu_score += 1
        print("\n\tSorry, you lost.")
    else:
        tie_count += 1
        print("\n\tIt is a tie, play again...")


print("\n\n\t---------------------------------")
print("\n\t\tYour Score:", player_score)
print("\t\tCPU Score:", cpu_score)
print("\t\tTotal Ties:", tie_count)
print("\n\n\t---------------------------------")

if player_score > cpu_score:
    print("\n\n\tCongratulations, you WON this round!")
    print("\n\n\t---------------------------------")
else:
    print("\n\n\tYou LOST this round!")
    print("\n\n\t---------------------------------")

print("\n")
