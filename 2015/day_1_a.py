is_example = input("Is this the example input? (yes/no): ").strip().lower() == "yes"

puzzle_input_file = open("./inputs/day_1_a_example.txt", "r") if is_example else open("./inputs/day_1_a.txt", "r")

puzzle_input = puzzle_input_file.read().strip()

floor = 0
for char in puzzle_input:
    if char == "(":
        floor += 1
    elif char == ")":
        floor -= 1

print(f"Final floor: {floor}")

puzzle_input_file.close()