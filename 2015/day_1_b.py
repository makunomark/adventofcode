from utils import is_example
from pathlib import Path

input_file = Path("./inputs/day_1_b_example.txt") if is_example() else Path("./inputs/day_1_b.txt")

instructions = input_file.read_text().strip()

floor = 0
for idx, ch in enumerate(instructions, start=1):
  if ch == "(":
    floor += 1
  else:
    floor -= 1
  
  if floor == -1:
    print(idx)
    break
